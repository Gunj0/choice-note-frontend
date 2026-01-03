import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export function Logout() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button
        type="submit"
        variant="secondary"
        className="cursor-pointer text-gray-500"
      >
        ログアウト
      </Button>
    </form>
  );
}
