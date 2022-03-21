import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component"
import { BsArrowRightShort, BsEmojiDizzy } from 'react-icons/bs'
import { Loader } from '../components/index'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [dataLength, setDataLength] = useState(1);
  const [errorAPI, setErrorAPI] = useState({});

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setErrorAPI({});
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${posts.length}&_limit=10`);
      setPosts([ ...posts, ...data ]);
      setDataLength(data.length);
    } catch(err) {
      setErrorAPI(err);
    }
  }

  const errorAPIMessage = () => (
    <p className="app-center-content flex-column">
      <BsEmojiDizzy className="fs-1" />
      An error occured, try again
    </p>
  )

  return (
    <div className="d-flex justify-content-center mt-5">
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchPosts}
        loader={errorAPI?.response ? errorAPIMessage() : <Loader />}
        hasMore={dataLength !== 0 ? true : false}
        style={{ overflow: 'hidden', textAlign: 'center', marginBottom: '6rem' }}
        scrollThreshold={1}
        >
        <div className="app-posts gap-4">
          {posts.length!==0 && posts.map((post, index) => (
          <div key={index} className="app-posts__item">
            <div className="app-posts__content">
              <div className="app-posts__header">
                <h4 className="app-title">{post.title}</h4>
              </div>
              <div className="app-posts__body">
                <p className="app-text my-3">{post.body}</p>
              </div>
              <div className="app-posts__footer d-flex justify-content-between align-items-end">  
                <Link to={`post/${post.id}`}>
                  <button 
                    className="app-link"
                    type="button"
                    >
                    Read More
                    <BsArrowRightShort />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default Posts;