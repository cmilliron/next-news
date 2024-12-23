import { getAllNews } from "@/lib/new";
import NewsList from "@/components/news-list";

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
