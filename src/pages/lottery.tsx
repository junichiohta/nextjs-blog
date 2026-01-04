import { NextPage } from "next";
import { LotteryResult } from "./api/lottery";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url: string): Promise<LotteryResult> =>
  fetch(url).then((response) => response.json());

const Lottery: NextPage = () => {
  const { data: lottery, error, mutate } = useSWR("/api/lottery", fetcher);

  const drawLottery = () => {
    mutate(); // データを再取得
  };

  return (
    <>
      <h1>おみくじ</h1>
      <div style={{ marginTop: "2rem", fontSize: "1.5rem" }}>
        {error && <p>エラーが発生しました</p>}
        {!lottery && !error && <p>読み込み中...</p>}
        {lottery && <p>おみくじ結果: <strong>{lottery.result}</strong></p>}
      </div>
      <div style={{ marginTop: "2rem" }}>
        <button 
          onClick={drawLottery}
          style={{
            padding: "0.5rem 2rem",
            fontSize: "1rem",
            cursor: "pointer",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px"
          }}
        >
          もう一度引く
        </button>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <Link href="/">← トップページに戻る</Link>
      </div>
    </>
  );
};

export default Lottery;
