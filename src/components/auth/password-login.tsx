import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PasswordLogin() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-6">
        <form
          action={async (formData) => {
            "use server";
            await signIn("credentials", formData);
          }}
          className="text-center flex flex-col gap-4"
        >
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                パスワードを忘れた場合
              </a>
            </div>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            ログイン
          </Button>
        </form>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </div>
  );
}
