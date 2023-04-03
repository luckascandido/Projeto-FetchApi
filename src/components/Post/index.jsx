import Postcard from '../Postcard/index';
import './post.css'
function Post({posts}){
    return (
        <div className ="posts">
        {posts.map(post => (
          <Postcard
            id={post.id}
            url = {post.cover}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    )
}
export default Post;