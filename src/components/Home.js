import { Posts } from '../containers/index'

const Home = () => {
  return (
    <>
      <div className="text-center col-10 offset-1 col-md-6 offset-md-3 pt-5">
        <h1 className="app-title">Checkout our company <br /><span className="text-primary">sport events</span>!</h1>
        <p className="app-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <Posts />
    </>
  )
}

export default Home;