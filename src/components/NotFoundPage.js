import NotFoundSVG from '../assets/404.svg'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="app-notFoundPage app-center-content flex-column">
      <img src={NotFoundSVG} alt="404 Not Found" className="app-notFoundPage__image"/>
      <h5 className="text-uppercase">The page</h5>
      <p className="text-uppercase">was not found</p>
      <Link className="text-uppercase text-decoration-none text-center" to="/">
        Back to home
      </Link>
    </div>
  )
}

export default NotFoundPage;