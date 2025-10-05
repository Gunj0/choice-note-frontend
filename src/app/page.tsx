import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PATH } from "@/const/Path";
import { SITE } from "@/const/Site";
import { Note } from "@/interface/Note";
import Link from "next/link";

export default async function Home() {
  // APIからノートデータを取得
  const data: Note[] = await fetch(process.env.API_URL + PATH.API.NOTE).then(
    (res) => res.json()
  );

  return (
    <main className="min-h-screen bg-background">
      {/* タイトルロゴ */}
      <div className="mt-8 mb-8 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">
          <Link href={PATH.HOME}>{SITE.title}</Link>
        </h1>
        <p className="text-muted-foreground text-pretty">{SITE.description}</p>
      </div>

      {/* 新規作成 */}
      <Button asChild className="w-24 m-8 mx-auto block text-center">
        <Link href={PATH.MEMO.NEW}>New +</Link>
      </Button>

      {/* メモ一覧 */}
      <Card className="m-4 p-4">
        <h2 className="text-2xl font-bold my-2">みんなの比較メモ</h2>
        {data.map((note) => (
          <div key={note.noteId} className="mb-4 p-4 border rounded">
            <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
            <p className="text-gray-700 mb-2">{note.content}</p>
            <p className="text-sm text-gray-500">
              {new Date(note.createdAt).toLocaleDateString("ja-JP")}
              {" (Update: "}
              {new Date(note.updatedAt).toLocaleDateString("ja-JP")} {") "}
            </p>
          </div>
        ))}
      </Card>
    </main>
  );
}
