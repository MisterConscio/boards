import "../styles/ThreadPage.css";

import posts from "../data.json";

import Post from "./Post";
import Header from "./Header";
import Footer from "./Footer";

const ThreadPage = () => {
  return (
    <>
      <Header pageType="thread" />
      <main className="post-content">
        {posts.map((post) => (
          <Post
            number={post.no}
            name={post.name}
            date={post.now}
            comment={post.com}
          />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default ThreadPage;
