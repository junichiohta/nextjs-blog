import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";

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
      ],
    },
  };
};

const Home: NextPage<HomeProps> = ({ allPostsData }) => {
  return (
    <>
      <h1>Blog Posts</h1>
      <div style={{ marginTop: "2rem" }}>
        {allPostsData?.map(({ id, title, date }) => (
          <div key={id} style={{ marginBottom: "1rem", padding: "1rem", border: "1px solid #ddd", borderRadius: "4px" }}>
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
