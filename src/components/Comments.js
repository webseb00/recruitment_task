import { useEffect, useState } from "react"
import axios from 'axios'
import { Comment, AddComment } from './index'

const Comments = ({ postId }) => {

  const [comments, setComments] = useState(null);

  useEffect(() => {
    getComments();
  }, [])

  const getComments = async () => {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      setComments(data);
    } catch(err) {
      console.log(err.message);
    }
  } 

  return (
    <div className="app-comments col-12 col-md-10 offset-md-1">
      <h5>{comments?.length} Comments:</h5>
      <div className="app-comments__container">
        {comments?.length ? 
        comments.map((el, index) => <Comment key={index} {...el}  />)
        : <p>No comments found...</p>}
      </div>
      <AddComment postId={postId} />
    </div>
  )
}

export default Comments