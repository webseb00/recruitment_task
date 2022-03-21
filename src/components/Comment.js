import { BsPersonSquare } from 'react-icons/bs'

const Comment = ({ id, email, body }) => {
  return (
    <div id={id} className="app-comment d-flex">
      <div className="app-comment__icon">
        <BsPersonSquare />
      </div>
      <div className="app-comment__item d-flex flex-column">
        <h6 className="fw-bold">Posted by: <a href={`mailto:${email}`}>{email}</a></h6>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default Comment