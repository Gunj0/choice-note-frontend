import ComparisonMemo from "@/components/comparison-memo";
import { Card } from "@/components/ui/card";

export default async function Home() {
  type Note = {
    noteId: number;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  };

  const data: Note[] = await fetch(
    "https://choice-note-backend.onrender.com/api/note"
  ).then((res) => res.json());

  return (
    <main className="min-h-screen bg-background">
      <Card className="text-center font-bold text-2xl m-4 p-4 bg-foreground text-background">
        This project is Work in progress...
      </Card>
      <ComparisonMemo />
    </main>
  );
}
