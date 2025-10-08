"use client";

import Link from "next/link";
import { useState } from "react";
import AuthButton from "./AuthButton";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-purple to-brand-pink rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-brand-purple to-brand-pink text-transparent bg-clip-text">
              GreetAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-foreground hover:text-brand-purple transition-colors duration-200 font-medium"
            >
              Главная
            </Link>
            <Link 
              href="/pricing" 
              className="text-muted-foreground hover:text-brand-purple transition-colors duration-200 font-medium"
            >
              Цены
            </Link>
            <Link 
              href="/about" 
              className="text-muted-foreground hover:text-brand-purple transition-colors duration-200 font-medium"
            >
              О нас
            </Link>
            <Link 
              href="/dashboard" 
              className="text-muted-foreground hover:text-brand-purple transition-colors duration-200 font-medium"
            >
              Кабинет
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <AuthButton />
            <Button 
              className="bg-gradient-to-r from-brand-purple to-brand-pink text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/pricing">
                Начать
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-foreground hover:text-brand-purple transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                href="/pricing" 
                className="text-muted-foreground hover:text-brand-purple transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Цены
              </Link>
              <Link 
                href="/about" 
                className="text-muted-foreground hover:text-brand-purple transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                О нас
              </Link>
              <Link 
                href="/dashboard" 
                className="text-muted-foreground hover:text-brand-purple transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Кабинет
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t">
                <AuthButton />
                <Button 
                  className="bg-gradient-to-r from-brand-purple to-brand-pink text-white w-full"
                  asChild
                >
                  <Link href="/pricing">
                    Начать
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}