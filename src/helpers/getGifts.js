export const getGifs = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=kq0OE0wQdgoL89nGfMVMUPVXqCABBOJk&q=${categoria}&limit=10`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifts = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.original.url
    }));
    return gifts;
}