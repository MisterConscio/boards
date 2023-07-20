import "../styles/ThreadPage.css";

//import posts from "../data.json";

import Post from "../components/Post";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

type Thread = {
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

const ThreadPage = () => {
  const threadNumber = useLocation();
  const [thread, setThread] = useState<Thread[]>([]);

  useEffect(() => {
    fetchThread(threadNumber.state);
  }, [threadNumber.state]);

  const fetchThread = async (numberid: string) => {
    try {
      const response = await fetch(
        `https://a.4cdn.org/g/thread/${numberid}.json`
      );
      if (!response.ok) {
        throw new Error("Fetch response was not ok.");
      }
      const threadData: Promise<any> = await response.json();
      const postData: Thread[] = [];
      for (const post of threadData.posts) {
        const { no, now, name, com, tim, ext, tn_w, tn_h, w, h } = post;
        postData.push({ no, now, name, com, tim, ext, tn_w, tn_h, w, h });
      }
      setThread(postData);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <>
      <Header pageType="thread" />
      <main className="post-content">
        {thread.map((post) => (
          <Post
            key={post.no}
            number={post.no}
            name={post.name}
            date={post.now}
            comment={post.com}
            image={post.tim}
            ext={post.ext}
            tn_w={post.tn_w}
            tn_h={post.tn_h}
            width={post.w}
            height={post.h}
          />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default ThreadPage;
