import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { 
  AiFillFacebook, 
  AiFillTwitterSquare, 
  AiFillYoutube, 
  AiFillInstagram } 
  from 'react-icons/ai'
import { BsEmojiDizzy } from 'react-icons/bs'
import { Comments, Loader } from './index'
import { BsArrowLeftShort } from 'react-icons/bs'

const Post = () => {

  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [errorAPI, setErrorAPI] = useState({});

  const { id } = useParams();
  
  useEffect(() => {
    getPost();
  }, [])

  const getPost = async () => {
    try {
      const { data: post } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const { data: user } = await axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
      setPost(post);
      setAuthor(user);
    } catch(err) {
      setErrorAPI(err);
    }
  }

  const errorAPIMessage = () => (
    <p className="vh-100 app-center-content flex-column">
      <BsEmojiDizzy className="fs-1" />
      An error occured, try again
    </p>
  )

  if(errorAPI?.response) return errorAPIMessage();

  return (
    <div className="col-12 col-lg-8 offset-lg-2 pb-6">
      {!author || !post ? (
        <div className="text-center my-5">
          <Loader />
        </div>
      ) : (
        <>
      <div className="app-post">
        <header className="app-post__header text-center">
          <h2 className="app-title">{post.title}</h2>
          <span className="app-post__author font-monospace">Posted by: <a href="#">{author.name}</a> | <a href="#">{author.email}</a></span>
          <span className="app-post__divider"></span>
        </header>
        <div className="app-post__body">
          <p className="app-text">{post.body}</p>
        </div>
        <footer className="app-post__footer d-flex justify-content-between">
          <Link to="/">
            <button type="button" className="app-link">
              <BsArrowLeftShort />Main page
            </button>
          </Link>
          <div className="app-post__socials">
            <a className="app-post__social" href="#">
              <AiFillFacebook className="fb-color" />
            </a>
            <a className="app-post__social" href="#">
              <AiFillTwitterSquare className="tw-color" />
            </a>
            <a className="app-post__social" href="#">
              <AiFillYoutube className="yt-color" />
            </a>
            <a className="app-post__social" href="#">
              <AiFillInstagram className="inst-color" />
            </a>
          </div>
        </footer>
      </div>
      <Comments postId={id} />
      </>
      )}
    </div>
  )
}

export default Post;