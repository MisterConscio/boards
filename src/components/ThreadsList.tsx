import { useEffect, useState } from "react";
import "../styles/ThreadsList.css";
import CatalogCard from "./ThreadCard";

type Catalog = {
  no: number;
  sub: string;
  com: string;
  replies: number;
  images: number;
};

const CatalogList = () => {
  const [threads, setThreads] = useState<Catalog[]>([]);

  useEffect(() => {
    fetchCatalog();
  }, []);

  const fetchCatalog = async () => {
    try {
      const response = await fetch("https://a.4cdn.org/g/catalog.json");
      if (!response.ok) {
        throw new Error("Fetch response was not ok.");
      }
      const catalogData: Promise<any> = await response.json();
      const threadData: Catalog[] = [];
      for (const page of catalogData) {
        for (const thread of page.threads) {
          const { no, com, sub, replies, images } = thread;
          threadData.push({ no, com, sub, replies, images });
        }
      }
      setThreads(threadData);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <main className="threads-grid">
      {threads.map((thread) => (
        <CatalogCard
          key={thread.no}
          id={thread.no}
          subject={thread.sub}
          commentary={thread.com}
          replies={thread.replies}
          images={thread.images}
        />
      ))}
    </main>
  );
};

export default CatalogList;
