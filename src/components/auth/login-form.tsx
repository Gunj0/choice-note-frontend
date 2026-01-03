import GoogleLogin from "@/components/auth/google-login";
import { PasswordLogin } from "@/components/auth/password-login";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

// 参考: https://v3.shadcn.com/blocks/login

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">オレの比較メモ</CardTitle>
          <CardDescription>
            あなただけの比較メモを記録・管理する
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="my-20">
            <GoogleLogin />
          </div>

          {/* ひとまずGoogleログインのみ */}
          <div className="hidden">
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
              <span className="relative z-10 bg-background px-2 text-muted-foreground">
                または
              </span>
            </div>
            <div className="my-10">
              <PasswordLogin />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
