"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X, Sparkles, Gift, Crown, Zap } from "lucide-react";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Free",
      description: "Идеально для начала",
      price: billingCycle === "monthly" ? "0" : "0",
      period: "",
      badge: null,
      icon: <Gift className="w-6 h-6" />,
      features: [
        { name: "Поинты", value: "5 в день" },
        { name: "Генерации", value: "Ограничены" },
        { name: "Базовые шаблоны", value: "50+" },
        { name: "Эксклюзивные шаблоны", value: null },
        { name: "Приоритетная поддержка", value: null },
        { name: "Реклама", value: "Присутствует" },
      ],
      cta: "Начать бесплатно",
      ctaVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Monthly",
      description: "Для активных пользователей",
      price: billingCycle === "monthly" ? "199" : "199",
      period: "/мес",
      badge: <Badge variant="destructive">Популярный</Badge>,
      icon: <Zap className="w-6 h-6" />,
      features: [
        { name: "Поинты", value: "100 в месяц" },
        { name: "Генерации", value: "Неограниченно" },
        { name: "Базовые шаблоны", value: "200+" },
        { name: "Эксклюзивные шаблоны", value: "100+" },
        { name: "Приоритетная поддержка", value: "check" },
        { name: "Реклама", value: "Без рекламы" },
      ],
      cta: "Оформить подписку",
      ctaVariant: "default" as const,
      popular: true,
    },
    {
      name: "Yearly",
      description: "Максимальная выгода",
      price: billingCycle === "monthly" ? "149" : "1490",
      period: billingCycle === "monthly" ? "/мес" : "/год",
      badge: <Badge variant="outline">Скидка 20%</Badge>,
      icon: <Crown className="w-6 h-6" />,
      features: [
        { name: "Поинты", value: "1200 в год" },
        { name: "Генерации", value: "Неограниченно" },
        { name: "Базовые шаблоны", value: "500+" },
        { name: "Эксклюзивные шаблоны", value: "300+" },
        { name: "Приоритетная поддержка", value: "check" },
        { name: "Реклама", value: "Без рекламы" },
      ],
      cta: "Оформить подписку",
      ctaVariant: "default" as const,
      popular: false,
    },
  ];

  const pointPackages = [
    { points: 100, price: "99", description: "Для небольших проектов" },
    { points: 500, price: "399", description: "Оптимальный выбор" },
    { points: 1000, price: "699", description: "Максимальная экономия" },
  ];

  return (
    <div className="container mx-auto py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-6">
          <Sparkles className="w-4 h-4 mr-2" />
          Гибкие тарифы для всех
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Выберите свой план
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Начните бесплатно и масштабируйтесь по мере роста. Отмените в любой момент.
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <Tabs value={billingCycle} onValueChange={(value) => setBillingCycle(value as "monthly" | "yearly")}>
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="monthly">Ежемесячно</TabsTrigger>
              <TabsTrigger value="yearly">
                Ежегодно
                <Badge variant="outline" className="ml-2">-20%</Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {plans.map((plan) => (
          <Card 
            key={plan.name}
            className={`relative hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${
              plan.popular ? 'border-2 border-primary shadow-xl scale-105' : 'border-2'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="destructive" className="px-4 py-1">
                  {plan.badge}
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {plan.icon}
                </div>
              </div>
              <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
              <p className="text-muted-foreground">{plan.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}₽</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{feature.name}</span>
                    <div className="flex items-center gap-2">
                      {feature.value === null ? (
                        <X className="w-4 h-4 text-muted-foreground" />
                      ) : feature.value === "check" ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <span className="text-sm font-medium">{feature.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                className={`w-full mt-6 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-accent hover:shadow-lg'
                    : ''
                }`}
                variant={plan.ctaVariant}
              >
                {plan.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Points Purchase Section */}
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-6">
          <Gift className="w-4 h-4 mr-2" />
          Дополнительные поинты
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Нужно больше?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Вы всегда можете докупить поинты. Они никогда не сгорают.
        </p>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg">
              <Gift className="w-5 h-5 mr-2" />
              Купить поинты
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Выберите пакет поинтов</DialogTitle>
              <DialogDescription>
                Дополнительные поинты для создания еще больше поздравлений
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {pointPackages.map((pkg) => (
                <Button
                  key={pkg.points}
                  variant="outline"
                  className="h-auto p-4 justify-between hover:border-primary hover:bg-primary/5"
                >
                  <div className="text-left">
                    <div className="font-semibold">{pkg.points} поинтов</div>
                    <div className="text-sm text-muted-foreground">{pkg.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{pkg.price}₽</div>
                    <div className="text-xs text-muted-foreground">
                      {(parseInt(pkg.price) / pkg.points * 100).toFixed(1)}₽/100 шт.
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* FAQ Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Частые вопросы</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="text-left">
            <CardHeader>
              <CardTitle className="text-lg">Можно ли отменить подписку?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Да, вы можете отменить подписку в любой момент. Доступ останется активным до конца оплаченного периода.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-left">
            <CardHeader>
              <CardTitle className="text-lg">Поинты сгорают со временем?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Нет, купленные поинты никогда не сгорают и остаются на вашем балансе до полного использования.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-left">
            <CardHeader>
              <CardTitle className="text-lg">Какие способы оплаты доступны?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Мы принимаем оплату через RuStore, банковские карты и другие популярные платежные системы.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-left">
            <CardHeader>
              <CardTitle className="text-lg">Есть ли техническая поддержка?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Бесплатные пользователи получают базовую поддержку, а премиум-пользователи — приоритетную помощь.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}