//key=

const apikey =z //api key

const peticion= //url hasta la parte que dice api_key= sin la api_key

peticion
    .then(resp =>resp.json())
    .then(({data}) => {
        console.log(data.images.original.url)
        
        const img= document.createElement('img')
        img.src=url   //url seria data.images.original.url

        document.body.appendChild(img)
    })
    .catch(console.warn)
