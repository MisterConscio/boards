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
        const { no, now, name, com } = post;
        postData.push({ no, now, name, com });
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
          />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default ThreadPage;
