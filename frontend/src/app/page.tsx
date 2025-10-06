import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold">
            Генерируй уникальные поздравления и открытки с ИИ за секунды!
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Экономия времени, безграничная персонализация и всегда идеальный результат.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg">Скачать приложение</Button>
            <Button size="lg" variant="outline">
              Подписаться сейчас
            </Button>
          </div>
        </section>

        {/* How it works Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Как это работает?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Выбери шаблон</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Сотни готовых шаблонов для любого повода.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>2. Добавь детали</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Укажи имя, повод и свои пожелания.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>3. ИИ творит магию</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Получи уникальное поздравление за несколько секунд.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Premium Features Section */}
        <section className="py-20 bg-secondary rounded-lg">
           <h2 className="text-3xl font-bold text-center mb-12">Преимущества Премиум</h2>
           <div className="grid md:grid-cols-2 gap-8 px-8">
             <Card>
               <CardHeader>
                 <CardTitle>Неограниченные генерации</CardTitle>
               </CardHeader>
               <CardContent>
                 <p>Создавай столько поздравлений, сколько нужно, без лимитов.</p>
               </CardContent>
             </Card>
             <Card>
               <CardHeader>
                 <CardTitle>Эксклюзивные шаблоны</CardTitle>
               </CardHeader>
               <CardContent>
                 <p>Доступ к премиальной коллекции шаблонов и стилей.</p>
               </CardContent>
             </Card>
           </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Что говорят наши пользователи</h2>
          <Carousel className="w-full max-w-xs sm:max-w-xl mx-auto">
            <CarouselContent>
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <p className="text-center">"Это просто спасение! Всегда нахожу идеальные слова для любого праздника."</p>
                        <p className="mt-4 font-semibold">- Пользователь {index + 1}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

      </div>
    </main>
  );
}
