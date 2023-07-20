import { useEffect, useState } from "react";
import "../styles/ThreadsList.css";
import CatalogCard from "./CatalogCard";

type Catalog = {
  no: number;
  sub: string;
  com: string;
  replies: number;
  images: number;
  tn_w: number;
  tn_h: number;
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
          const { no, com, sub, replies, images, tn_w, tn_h } = thread;
          threadData.push({ no, com, sub, replies, images, tn_w, tn_h });
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
          thumbWidth={thread.tn_w}
          thumbHeight={thread.tn_h}
        />
      ))}
    </main>
  );
};

export default CatalogList;
