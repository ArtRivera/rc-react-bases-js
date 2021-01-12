const apiKey = 'ju4jVWyfBJnhJM4l1hhufg8rb1yNLBsT';


const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    })