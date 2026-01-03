import { auth } from "@/auth";
import Header from "@/components/common/header";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <>
      <Header session={session} />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
