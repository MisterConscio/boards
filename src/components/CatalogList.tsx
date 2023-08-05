import { useEffect, useState } from "react";

import CatalogCard from "./CatalogCard";

import "../styles/ThreadsList.css";

export type Threads = {
  no: number;
  sub: string;
  com: string;
  tn_w: number;
  tn_h: number;
  tim: number;
  replies: number;
  images: number;
};

type Catalog = {
  page: number;
  threads: Threads[];
};

const CatalogList = () => {
  const [thread, setThread] = useState<Threads[]>([]);

  useEffect(() => {
    fetchCatalog();
  }, []);

  const fetchCatalog = async () => {
    try {
      const response = await fetch("https://a.4cdn.org/g/catalog.json");
      const catalogData: Catalog[] = await response.json();
      const threadData: Threads[] = [];
      for (const page of catalogData) {
        for (const thread of page.threads) {
          threadData.push(thread);
        }
      }
      setThread(threadData);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <main className="threads-grid">
      {thread.map((thread) => (
        <CatalogCard key={thread.no} {...thread} />
      ))}
    </main>
  );
};

export default CatalogList;
