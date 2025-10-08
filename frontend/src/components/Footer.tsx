"use client";

import Link from "next/link";
import { Sparkles, Mail, Phone, MapPin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  product: [
    { label: "Функции", href: "/#features" },
    { label: "Цены", href: "/pricing" },
    { label: "Шаблоны", href: "/templates" },
    { label: "API", href: "/api" },
  ],
  company: [
    { label: "О нас", href: "/about" },
    { label: "Блог", href: "/blog" },
    { label: "Карьера", href: "/careers" },
    { label: "Пресса", href: "/press" },
  ],
  support: [
    { label: "Помощь", href: "/help" },
    { label: "Контакты", href: "/contact" },
    { label: "Статус", href: "/status" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Политика конфиденциальности", href: "/privacy" },
    { label: "Условия использования", href: "/terms" },
    { label: "Cookie политика", href: "/cookies" },
    { label: "GDPR", href: "/gdpr" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                GreetAI
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Создавайте уникальные поздравления и открытки с помощью искусственного интеллекта. 
              Радуйте близких персонализированными сообщениями для любого повода.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://vk.com" target="_blank" rel="noopener noreferrer">
                  <Send className="h-5 w-5" />
                  <span className="sr-only">VK</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:hello@greetai.ru">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Продукт</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Правовая информация</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted-foreground text-sm">
            © 2024 GreetAI. Все права защищены.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Россия, Москва</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <Link href="mailto:hello@greetai.ru" className="hover:text-primary transition-colors">
                hello@greetai.ru
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <Link href="tel:+74951234567" className="hover:text-primary transition-colors">
                +7 (495) 123-45-67
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/privacy">Конфиденциальность</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/terms">Условия</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}