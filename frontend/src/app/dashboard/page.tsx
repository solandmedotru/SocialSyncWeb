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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
        Личный кабинет
      </h1>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Профиль</TabsTrigger>
          <TabsTrigger value="subscription">Подписка</TabsTrigger>
          <TabsTrigger value="points">Поинты</TabsTrigger>
          <TabsTrigger value="history">История</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-16 w-16">
                <Image
                  src="https://github.com/shadcn.png"
                  alt="User avatar"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Добро пожаловать, User!</CardTitle>
                <CardDescription>user@example.com</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4">
               <div className="flex items-center justify-between rounded-lg border p-4">
                  <span>Баланс поинтов</span>
                  <span className="font-bold">150</span>
               </div>
               <div className="flex items-center justify-between rounded-lg border p-4">
                  <span>Статус подписки</span>
                  <Badge>Активна до 15.11.2025</Badge>
               </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="subscription" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Управление подпиской</CardTitle>
              <CardDescription>Ваш текущий план: Yearly</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <p>Дата следующего платежа: 15.11.2025</p>
              <Button variant="destructive" className="w-full md:w-auto">Отменить подписку</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="points" className="mt-6">
           <Card>
            <CardHeader>
              <CardTitle>Управление поинтами</CardTitle>
              <CardDescription>Ваш текущий баланс: 150</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Здесь будет график расхода/пополнения.</p>
              <Button>Купить поинты</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          <Card>
             <CardHeader>
              <CardTitle>История транзакций</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Дата</TableHead>
                    <TableHead>Тип</TableHead>
                    <TableHead className="text-right">Сумма</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>05.10.2025</TableCell>
                    <TableCell>Покупка</TableCell>
                    <TableCell className="text-right">+100 поинтов</TableCell>
                  </TableRow>
                   <TableRow>
                    <TableCell>04.10.2025</TableCell>
                    <TableCell>Генерация</TableCell>
                    <TableCell className="text-right">-1 поинт</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}