"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news";
import { getAllNews } from "@/lib/new";
import NewsList from "@/components/news-list";

export default async function NewsPage() {
  // const allNews = getAllNews();

  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch newws.");
  }

  const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
