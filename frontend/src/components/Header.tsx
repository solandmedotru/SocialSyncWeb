import Link from "next/link";
import AuthButton from "./AuthButton";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="py-4 px-8 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          SocialSync
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Главная
          </Link>
          <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
            Цены
          </Link>
          <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
            Кабинет
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <AuthButton />
        </div>
      </div>
    </header>
  );
}