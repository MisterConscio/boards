import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Post from "../components/Post";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/ThreadPage.css";

export type PostInfo = {
  no: number;
  now: string;
  name: string;
  com: string;
  tim: number;
  ext: string;
  tn_w: number;
  tn_h: number;
  w: number;
  h: number;
};

type Thread = {
  posts: PostInfo[];
};

const ThreadPage = () => {
  const threadNumber = useLocation();
  const [posts, setPosts] = useState<PostInfo[]>([]);

  useEffect(() => {
    fetchThread(threadNumber.state);
  }, []);

  const fetchThread = async (numberid: string) => {
    try {
      const response = await fetch(
        `https://a.4cdn.org/g/thread/${numberid}.json`
      );
      const threadData: Thread = await response.json();
      const postData: PostInfo[] = [];
      for (const posts of threadData.posts) {
        postData.push(posts);
      }
      setPosts(postData);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <>
      <Header pageType="thread" />
      <main className="post-content">
        {posts.map((post) => (
          <Post key={post.no} {...post} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default ThreadPage;
