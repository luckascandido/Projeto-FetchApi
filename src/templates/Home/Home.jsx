
import './Home.css';
import { Component } from 'react';
import { loadPost } from '../../utils/loadpost';
import Post from '../../components/Post';
import { Inputtext } from '../../components/Input';
import {Button} from '../../components/Button'; 


class Home extends Component {
  state = {
    posts: [],
    allPosts:[],
    pagina:0,
    postsporPagina: 3,
    searchValue: '',
  };
 

  componentDidMount() {
      this.loadPost();
  }

  loadPost = async () =>{

    // pega os dados  da api externas
    const postsAndPhotos = await loadPost();
    // pega o numero de paginas e posts por pagina
     const {pagina, postsporPagina} = this.state;
    // retorna os jsons para o objeto da classe.
      this.setState({
        posts: postsAndPhotos.slice(pagina, postsporPagina),
        allPosts:postsAndPhotos,
      });
  }
  loadMorePosts = ()=>{
    const {
      pagina,
      postsporPagina,
      allPosts,
      posts,
    } = this.state;
    const proximaPagina = pagina + postsporPagina;
    const proximosPosts = allPosts.slice(proximaPagina, proximaPagina+postsporPagina)
    posts.push(...proximosPosts);
    this.setState({posts, pagina:proximaPagina}); 
  }
   handleChange = (e)=>{
    const {value} = e.target;
     this.setState({searchValue: value});
   }
  render() {
    const {posts, postsporPagina, pagina, allPosts, searchValue } = this.state;
    const semMaisPost = pagina + postsporPagina >= allPosts.length ;
  
    const filtroDePosts = !!searchValue ?
    allPosts.filter(post=>{
      return(post.title.toLowerCase().includes(searchValue.toLowerCase()));
    })
    :posts;
    return (
      console.log(),
      <section className='container'>
        {!!searchValue && (
          <div>
            <h1>Search Value: {searchValue}</h1>
          </div>
        )}

        <input 
          className='input'
          onChange={this.handleChange}
          value={searchValue}
          type='search'
        />
       {filtroDePosts.length > 0 && (
        <Post posts={filtroDePosts} />
      )}
      {filtroDePosts.length === 0 && (
          <p>Não existem Post's</p>
      )}
    
      <div className='button-container'>
      {!searchValue &&(
        <Button
          text='load more'
          onClick={this.loadMorePosts}
          disabled={semMaisPost}
        />
      )}
      
      </div>
      </section>
    );
  }
}
export default Home;
