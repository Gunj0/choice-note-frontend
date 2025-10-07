import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PATH } from "@/const/Path";
import { SITE } from "@/const/Site";
import { Memo } from "@/interface/Memo";
import { formatDate } from "@/lib/date";
import Link from "next/link";

// メモ一覧取得
const getMemosJson = async (): Promise<Memo[]> => {
  try {
    const res = await fetch(process.env.API_URL + PATH.API.MEMO, {
      method: "GET",
      next: { revalidate: 60 },
      cache: "default",
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export default async function Home() {
  // APIからメモデータを取得
  const data = await getMemosJson();

  return (
    <main className="min-h-screen bg-background">
      {/* タイトルロゴ */}
      <div className="mt-8 mb-8 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">
          {SITE.TITLE}
        </h1>
        <p className="text-muted-foreground text-pretty">{SITE.DESCRIPTION}</p>
      </div>

      {/* 新規作成 */}
      <Button asChild className="w-40 m-8 mx-auto block text-center">
        <Link href={PATH.MEMO.NEW}>メモを作る</Link>
      </Button>

      {/* メモ一覧 */}
      <Card className="m-4 p-4">
        <h2 className="text-2xl font-bold my-2">みんなの比較メモ</h2>
        {data.length == 0 ? (
          <p className="text-gray-500">まだメモがありません。</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.map((note) => (
              <Card
                key={note.noteId}
                className="p-4 hover:shadow-lg transition-shadow"
              >
                {/* line-clamp-2: 3行以上になる場合は...で省略する */}
                <h3 className="text-xl font-semibold line-clamp-2">
                  {note.title}
                </h3>
                <p className="text-gray-700">{note.content}</p>
                <p className="text-sm text-gray-500">
                  {`更新日: ${formatDate(note.updatedAt)}`}
                </p>
              </Card>
            ))}
          </div>
        )}
      </Card>
    </main>
  );
}
