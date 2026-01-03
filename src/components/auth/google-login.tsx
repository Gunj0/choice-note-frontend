import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function GoogleLogin() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button type="submit" className="w-full cursor-pointer" variant="outline">
        <Image
          src="/google-logo.svg"
          alt="Google Logo"
          width={18}
          height={18}
          className="h-4 w-4"
        />
        <p>Googleでログイン</p>
      </Button>
    </form>
  );
}
