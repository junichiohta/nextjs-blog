import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { useAtom } from "jotai";
import { SortOrder, sortOrderAtom } from "@/atoms";

type Post = {
  id: number;
  title: string;
  date: string;
};

type HomeProps = {
  allPostsData: Post[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      allPostsData: [
        { id: 1, title: "First Post", date: "2024-01-01" },
        { id: 2, title: "Second Post", date: "2024-01-02" },
        { id: 3, title: "Third Post", date: "2024-01-03" },
        { id: 4, title: "Fourth Post", date: "2024-01-04" },
        { id: 5, title: "Fifth Post", date: "2024-01-05" },
      ],
    },
  };
};

const Home: NextPage<HomeProps> = ({ allPostsData }) => {
  const [sortOrder, setSortOrder] = useAtom(sortOrderAtom);

  // 日付で並べ替えたデータ
  const sortedPosts = allPostsData?.sort(
    (a, b) => Date.parse(a.date) - Date.parse(b.date)
  );

  // 指定順で並べ替えたデータ
  const posts =
    sortOrder === SortOrder.Ascending ? sortedPosts : sortedPosts.toReversed();

  return (
    <>
      <h1>Blog Posts</h1>

      {/* ソート順の選択 */}
      <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
        <span style={{ marginRight: "1rem" }}>
          <input
            type="radio"
            id="descending"
            name="sortOrder"
            value="descending"
            checked={sortOrder === SortOrder.Descending}
            onChange={() => setSortOrder(SortOrder.Descending)}
          />
          <label htmlFor="descending"> Newer (新しい順)</label>
        </span>
        <span>
          <input
            type="radio"
            id="ascending"
            name="sortOrder"
            value="ascending"
            checked={sortOrder === SortOrder.Ascending}
            onChange={() => setSortOrder(SortOrder.Ascending)}
          />
          <label htmlFor="ascending"> Older (古い順)</label>
        </span>
      </div>

      {/* データの表示 */}
      <div>
        {posts.map(({ id, title, date }) => (
          <div
            key={id}
            style={{
              marginBottom: "1rem",
              padding: "1rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>Date:</strong> {date}
            </p>
            <p style={{ margin: "0.5rem 0 0 0" }}>
              <strong>Title:</strong> {title}
            </p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <Link href="/">← トップページに戻る</Link>
      </div>
    </>
  );
};

export default Home;
