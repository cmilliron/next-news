import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/new";

export default function DefaultLatestPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
