export const getGifs = async (category) =>{
    const key = '8Di4e9BSjf9uj7Mz6eyXcQea1UbjYkwS';
    const limit = '10';
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=${limit}&api_key=${key}`;  
    const resp = await fetch(url);
    const { data }  = await resp.json();

    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}