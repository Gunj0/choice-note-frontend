import ComparisonMemo from "@/components/comparison-memo";

export default async function New() {
  return (
    <main className="min-h-screen bg-background">
      {/* 比較メモ */}
      <ComparisonMemo />
    </main>
  );
}
