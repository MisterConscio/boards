import "../styles/ThreadPage.css";

import posts from "../data.json";

import Post from "../components/Post";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ThreadPage = () => (
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

export default ThreadPage;
