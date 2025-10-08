"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  User, 
  CreditCard, 
  TrendingUp, 
  History, 
  Settings, 
  Gift, 
  Sparkles, 
  LogOut,
  MoreHorizontal,
  Calendar,
  Zap,
  Crown,
  Download,
  Eye,
  Check
} from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
  const [pointsBalance] = useState(150);
  const [subscriptionStatus] = useState({
    plan: "Yearly",
    status: "active",
    endDate: "15.11.2025",
    nextPayment: "15.11.2025"
  });

  const transactions = [
    { id: 1, date: "05.10.2025", type: "purchase", description: "Покупка поинтов", amount: "+100", status: "completed" },
    { id: 2, date: "04.10.2025", type: "generation", description: "Генерация поздравления", amount: "-1", status: "completed" },
    { id: 3, date: "03.10.2025", type: "generation", description: "Генерация открытки", amount: "-1", status: "completed" },
    { id: 4, date: "01.10.2025", type: "subscription", description: "Продление подписки", amount: "-1490₽", status: "completed" },
    { id: 5, date: "28.09.2025", type: "purchase", description: "Покупка поинтов", amount: "+500", status: "completed" },
  ];

  const pointPackages = [
    { points: 100, price: "99", bonus: 0 },
    { points: 500, price: "399", bonus: 50 },
    { points: 1000, price: "699", bonus: 150 },
  ];

  const getUsagePercentage = () => {
    const dailyLimit = 5;
    return Math.min((pointsBalance / dailyLimit) * 100, 100);
  };

  return (
    <div className="container mx-auto py-20">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Личный кабинет</h1>
        <p className="text-lg text-muted-foreground">
          Управляйте подпиской и создавайте волшебные поздравления
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Баланс поинтов</CardTitle>
            <Sparkles className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pointsBalance}</div>
            <p className="text-xs text-muted-foreground">
              Доступно для генераций
            </p>
            <Progress value={getUsagePercentage()} className="mt-2" />
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Подписка</CardTitle>
            <Crown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscriptionStatus.plan}</div>
            <p className="text-xs text-muted-foreground">
              Активна до {subscriptionStatus.endDate}
            </p>
            <Badge variant="default" className="mt-2">
              {subscriptionStatus.status === "active" ? "Активна" : "Неактивна"}
            </Badge>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Генераций</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">
              За этот месяц
            </p>
            <div className="flex items-center pt-2">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-xs text-green-500">+12% за прошлый месяц</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Профиль
          </TabsTrigger>
          <TabsTrigger value="subscription" className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            Подписка
          </TabsTrigger>
          <TabsTrigger value="points" className="flex items-center gap-2">
            <Gift className="w-4 h-4" />
            Поинты
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <History className="w-4 h-4" />
            История
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                    <AvatarFallback className="text-lg">UN</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl">Добро пожаловать!</CardTitle>
                    <CardDescription className="text-base">user@example.com</CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">
                        <Crown className="w-3 h-3 mr-1" />
                        {subscriptionStatus.plan}
                      </Badge>
                      <Badge variant="secondary">ID: #12345</Badge>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="icon">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="font-medium">Баланс поинтов</span>
                  </div>
                  <span className="font-bold text-lg">{pointsBalance}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="font-medium">Дата регистрации</span>
                  </div>
                  <span className="font-medium">01.09.2024</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="font-medium">Всего генераций</span>
                  </div>
                  <span className="font-bold text-lg">156</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <Gift className="w-5 h-5 text-secondary" />
                    <span className="font-medium">Куплено поинтов</span>
                  </div>
                  <span className="font-bold text-lg">600</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t">
                <Button variant="outline" className="gap-2">
                  <Settings className="w-4 h-4" />
                  Настройки профиля
                </Button>
                <Button variant="outline" className="gap-2 text-destructive hover:text-destructive">
                  <LogOut className="w-4 h-4" />
                  Выйти
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscription" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Управление подпиской
              </CardTitle>
              <CardDescription>
                Ваш текущий план: <span className="font-semibold">{subscriptionStatus.plan}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">Дата следующего платежа</span>
                  </div>
                  <p className="text-lg font-semibold">{subscriptionStatus.nextPayment}</p>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">Статус подписки</span>
                  </div>
                  <Badge 
                    variant={subscriptionStatus.status === "active" ? "default" : "destructive"}
                    className="text-sm"
                  >
                    {subscriptionStatus.status === "active" ? "Активна" : "Неактивна"}
                  </Badge>
                </div>
              </div>
              
              <div className="rounded-lg bg-muted/50 p-4">
                <h4 className="font-medium mb-2">Преимущества вашего плана:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Неограниченные генерации поздравлений</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Доступ к 300+ эксклюзивным шаблонам</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Приоритетная поддержка</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-green-500" />Отсутствие рекламы</li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1">
                  Продлить подписку
                </Button>
                <Button variant="destructive" className="flex-1">
                  Отменить подписку
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="points" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  Управление поинтами
                </CardTitle>
                <CardDescription>
                  Ваш текущий баланс: <span className="font-semibold">{pointsBalance} поинтов</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg bg-muted/50 p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Дневной лимит использован</span>
                      <span className="text-sm text-muted-foreground">3/5</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Получено сегодня:</span>
                      <span className="font-medium">5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Потрачено Сегодня:</span>
                      <span className="font-medium">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Всего куплено:</span>
                      <span className="font-medium">600</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Купить поинты</CardTitle>
                <CardDescription>
                  Выберите подходящий пакет для создания еще больше поздравлений
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pointPackages.map((pkg) => (
                    <Dialog key={pkg.points}>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full justify-between h-auto p-4 hover:border-primary"
                        >
                          <div className="text-left">
                            <div className="font-semibold">{pkg.points} поинтов</div>
                            {pkg.bonus > 0 && (
                              <div className="text-xs text-green-600">+{pkg.bonus} бонус</div>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="font-bold">{pkg.price}₽</div>
                            <div className="text-xs text-muted-foreground">
                              {((parseInt(pkg.price) / pkg.points) * 100).toFixed(1)}₽/100 шт.
                            </div>
                          </div>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Подтверждение покупки</DialogTitle>
                          <DialogDescription>
                            Вы хотите купить {pkg.points} поинтов за {pkg.price}₽
                            {pkg.bonus > 0 && ` + ${pkg.bonus}_bonusных поинтов`}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end gap-4 pt-4">
                          <Button variant="outline">Отмена</Button>
                          <Button>Подтвердить покупку</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="w-5 h-5" />
                История транзакций
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Дата</TableHead>
                    <TableHead>Тип</TableHead>
                    <TableHead>Описание</TableHead>
                    <TableHead className="text-right">Сумма</TableHead>
                    <TableHead className="text-right">Статус</TableHead>
                    <TableHead className="w-[70px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.date}</TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {transaction.type === 'purchase' && <Gift className="w-3 h-3 mr-1" />}
                          {transaction.type === 'generation' && <Sparkles className="w-3 h-3 mr-1" />}
                          {transaction.type === 'subscription' && <CreditCard className="w-3 h-3 mr-1" />}
                          {transaction.type === 'purchase' && 'Покупка'}
                          {transaction.type === 'generation' && 'Генерация'}
                          {transaction.type === 'subscription' && 'Подписка'}
                        </Badge>
                      </TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell className={`text-right font-medium ${
                        transaction.amount.startsWith('+') ? 'text-green-600' : 'text-destructive'
                      }`}>
                        {transaction.amount}
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge variant={transaction.status === "completed" ? "default" : "secondary"}>
                          {transaction.status === "completed" ? "Выполнено" : "В обработке"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Открыть меню</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="w-4 h-4 mr-2" />
                              Посмотреть детали
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="w-4 h-4 mr-2" />
                              Скачать чек
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}