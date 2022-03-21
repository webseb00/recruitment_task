import { useState } from "react"
import axios from 'axios'

const AddComment = ({ postId }) => {
  const [isSending, setIsSending] = useState(false);
  const [form, setForm] = useState({
    email: '',
    body: ''
  });
  const { email, body } = form;

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    if(!email || !body) {
      console.log('You cannot submit empty comment!');
      return;
    }

    try {
      setIsSending(true);
      await axios.post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, form);
      setForm({ email: '', body: '' });
    } catch(err) {
      console.log(err.message);
    }
    setIsSending(false);
  }

  return (
    <form className="app-addComment" onSubmit={handleSubmit}>
      <input 
        className="form-control"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Email address"
        required
      />
      <textarea 
        className="form-control"
        name="body" 
        value={body} 
        onChange={handleChange}
        placeholder="Share your opinion about this event!"
        required
      >
      </textarea>
      <button 
        className="btn btn-primary" 
        type="submit"
      >
        {isSending ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Sending...
          </>
        ): 'Submit comment'}
      </button>
    </form>
  )
}

export default AddComment