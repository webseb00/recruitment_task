import { Layout } from './containers/index';
import { Routes, Route } from "react-router-dom";
import { Home, Post, CreatePost, NotFoundPage } from './components/index';

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/new-post" element={<CreatePost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
