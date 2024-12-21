"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news";
import { getAllNews } from "@/lib/new";
import NewsList from "@/components/news-list";

export default function NewsPage() {
  // const allNews = getAllNews();
  const [error, setError] = useState();
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews() {
      setIsLoadingState(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setIsLoadingState(false);
        setError("Failed to fect news.");
      }
      setIsLoadingState(false);
      const news = await response.json();
      setNews(news);
    }

    fetchNews();
  }, []);

  if (isLoadingState) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
