export const  loadPost= async () =>{
    // cria requisiçoes de api's externas
    const postRequest = fetch("https://jsonplaceholder.typicode.com/posts");
    const photosRequest= fetch("https://jsonplaceholder.typicode.com/photos");
    // cria promises das requisiçoes  para fazer a transformação para json
    const [posts,photos] = await Promise.all([postRequest,photosRequest]);
    // cria json apartir das requisições.
    const postsJson = await posts.json();
    const photosJson = await photos.json();
    // colocando uma foto para cada post mapeando o index.
    const postsAndPhotos = postsJson.map((post, index)=>{
      return { ...post, cover:photosJson[index].url}
    });
     //retorna os dados
     return (postsAndPhotos);
}