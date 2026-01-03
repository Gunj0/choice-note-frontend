import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/user/user-avatar";
import { PATH } from "@/const/Path";
import { SITE } from "@/const/Site";
import { NotebookPen } from "lucide-react";
import { Session } from "next-auth";
import Link from "next/link";

export default function Header({ session }: { session: Session | null }) {
  return (
    <header className="mt-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <h1 className="text-lg font-bold text-foreground mb-2 text-balance">
        <NotebookPen className="inline mb-1 mr-1" size={24} aria-hidden />
        <Link href={PATH.HOME}>{SITE.TITLE}</Link>
      </h1>
      {session ? (
        <Link href={PATH.USER}>
          <UserAvatar />
        </Link>
      ) : (
        <Button asChild>
          <Link href={PATH.LOGIN}>ログイン</Link>
        </Button>
      )}
    </header>
  );
}
