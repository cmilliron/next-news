import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news";
import { getAllNews } from "@/lib/new";
import NewsList from "@/components/news-list";

export default function NewsPage() {
  const allNews = getAllNews();
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={allNews} />
    </>
  );
}
