import { auth } from "@/auth";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user?.image) return null;

  return (
    <div className="rounded-full overflow-hidden border-2">
      <Image
        src={session.user.image}
        alt="User Avatar"
        width={30}
        height={30}
      />
    </div>
  );
}
