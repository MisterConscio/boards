import "../styles/ThreadPage.css";

import posts from "../data.json";

import Post from "../components/Post";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const ThreadPage = () => {
  const threadNumber = useLocation()

  return (
    <>
      <Header pageType="thread" />
      <p>{threadNumber.state}</p>
      <main className="post-content">
        {posts.map((post) => (
          <Post
            key={post.no}
            number={post.no}
            name={post.name}
            date={post.now}
            comment={post.com}
          />
        ))}
      </main>
      <Footer />
    </>
  )
};

export default ThreadPage;
