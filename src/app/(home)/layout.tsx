import { auth } from "@/auth";
import Header from "@/components/common/header";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <div>
      <Header session={session} />
      <div className="min-h-screen">{children}</div>
    </div>
  );
}
