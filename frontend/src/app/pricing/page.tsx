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

export default function PricingPage() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
        Выберите свой план
      </h1>

      {/* Pricing Table */}
      <Card className="mb-20">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Функция</TableHead>
              <TableHead className="text-center">Free</TableHead>
              <TableHead className="text-center">
                Monthly <Badge variant="destructive" className="ml-2">Популярный</Badge>
              </TableHead>
              <TableHead className="text-center">
                Yearly <Badge variant="outline" className="ml-2">Скидка 20%</Badge>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Поинты</TableCell>
              <TableCell className="text-center">5 в день</TableCell>
              <TableCell className="text-center">100 в месяц</TableCell>
              <TableCell className="text-center">1200 в год</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Генерации</TableCell>
              <TableCell className="text-center">Ограничены</TableCell>
              <TableCell className="text-center">Неограниченно</TableCell>
              <TableCell className="text-center">Неограниченно</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Эксклюзивные шаблоны</TableCell>
              <TableCell className="text-center">❌</TableCell>
              <TableCell className="text-center">✅</TableCell>
              <TableCell className="text-center">✅</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Поддержка</TableCell>
              <TableCell className="text-center">Базовая</TableCell>
              <TableCell className="text-center">Приоритетная</TableCell>
              <TableCell className="text-center">Приоритетная</TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell className="text-center">
                <Button variant="outline" className="w-full">Бесплатно</Button>
              </TableCell>
              <TableCell className="text-center">
                <Button className="w-full">199 ₽ / мес</Button>
              </TableCell>
              <TableCell className="text-center">
                <Button className="w-full">1490 ₽ / год</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      {/* Buy Points Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Нужно больше?</h2>
        <p className="text-muted-foreground mb-8">
          Вы всегда можете докупить поинты дополнительно.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Купить поинты</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Пакеты поинтов</DialogTitle>
              <DialogDescription>
                Выберите подходящий пакет, чтобы продолжить творить.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Button variant="outline" className="justify-between">
                100 поинтов <span>99 ₽</span>
              </Button>
              <Button variant="outline" className="justify-between">
                500 поинтов <span>399 ₽</span>
              </Button>
              <Button variant="outline" className="justify-between">
                1000 поинтов <span>699 ₽</span>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}