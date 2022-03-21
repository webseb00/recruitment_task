import { useState } from 'react'
import axios from 'axios'

const CreatePost = () => {

  const [isSending, setIsSending] = useState(false);
  const [form, setForm] = useState({
    user_name: '',
    email: '',
    title: '',
    body: ''
  })

  const { user_name, email, title, body } = form;

  const handleOnChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    if(!user_name || !email || !title || !body) {
      console.log('Fields cannot by empty');
      return;
    } 

    try {
      setIsSending(true);
      await axios.post('https://jsonplaceholder.typicode.com/posts/', form);
      setForm({ user_name: '', email: '', title: '', body: '' });
      setIsSending(false);
    } catch(err) {
      console.log(err.message);
    }
  }

  return (
    <div className="app-addPost app-center-content">
      <form className="app-addPost__form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control"  
            placeholder="Your name"
            name="user_name"
            value={user_name}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mb-3">
          <input 
            type="email" 
            className="form-control"  
            placeholder="Email address"
            name="email"
            value={email}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control"  
            placeholder="Post title"
            name="title"
            value={title}
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mb-3">
          <textarea 
            className="form-control" 
            placeholder="Post content"
            name="body"
            value={body}
            onChange={handleOnChange}
            required
          >
            {body}
          </textarea>
        </div>
        <button 
          type="submit"
          className="btn btn-secondary"
          >
          {isSending ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Sending...
            </>
          ): 'Create post'}
        </button>
      </form>
    </div>
  )
}

export default CreatePost;