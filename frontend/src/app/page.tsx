import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Gift, Heart, Star } from "lucide-react";

const RatingStars = ({ rating = 5, className }: { rating?: number, className?: string }) => (
  <div className={`flex ${className}`}>
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
    ))}
  </div>
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="text-center py-20 lg:py-32">
          <Badge variant="outline" className="mb-6 text-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            ИИ-генерация за секунды
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Генерируй уникальные{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary text-transparent bg-clip-text animate-gradient">
              поздравления и открытки
            </span>{" "}
            с ИИ
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Создавайте персонализированные поздравления для любых случаев с помощью искусственного интеллекта. 
            Экономьте время и радуйте близких уникальными открытками.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Gift className="w-5 h-5 mr-2" />
              Скачать приложение
            </Button>
            <Button size="lg" variant="outline" className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Star className="w-5 h-5 mr-2" />
              Подписаться сейчас
            </Button>
          </div>
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span>10к+ довольных пользователей</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>4.9 рейтинг в RuStore</span>
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Как это работает</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Всего три простых шага для создания идеального поздравления
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold group-hover:scale-110 transition-transform">
                  1
                </div>
                <CardTitle className="text-xl">Выбери шаблон</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Откройте наш каталог с сотнями готовых шаблонов для дней рождения, праздников и особых событий
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center text-secondary-foreground text-2xl font-bold group-hover:scale-110 transition-transform">
                  2
                </div>
                <CardTitle className="text-xl">Добавь детали</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Укажите имя получателя, повод, желаемый тон и особые пожелания для персонализации
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-secondary/20">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold group-hover:scale-110 transition-transform">
                  3
                </div>
                <CardTitle className="text-xl">ИИ генерирует</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Искусственный интеллект создаст уникальное поздравление за считанныe секунды
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Premium Features Section */}
        <section className="py-20 lg:py-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Преимущества премиум</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Получите максимум возможностей с подпиской Premium
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Неограниченные генерации</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Безлимитное создание поздравлений
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Приоритетная обработка запросов
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Реклама отключена
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Gift className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle>Эксклюзивные шаблоны</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    500+ премиум шаблонов
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Новые стили каждую неделю
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Кастомизация дизайна
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Особые возможности</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Генерация в разных стилях
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Сохранение в избранное
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Экспорт в разных форматах
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/20 to-background">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Что говорят пользователи</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Тысячи людей уже создали незабываемые моменты с нашим приложением
            </p>
          </div>
          <Carousel className="w-full max-w-md sm:max-w-lg lg:max-w-2xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                      <RatingStars className="mb-4" />
                      <p className="text-lg mb-4 italic">
                        "Это приложение изменило мой подход к поздравлениям! Теперь я могу создавать уникальные открытки для каждого праздника. ИИ действительно понимает, что нужно!"
                      </p>
                      <p className="font-semibold">- Мария К.</p>
                      <p className="text-sm text-muted-foreground">Использует 6 месяцев</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                      <RatingStars className="mb-4" />
                      <p className="text-lg mb-4 italic">
                        "Экономлю столько времени! Раньше часами подбирала слова для поздравлений, а теперь просто указываю детали и получаю идеальный текст за секунды."
                      </p>
                      <p className="font-semibold">- Александр П.</p>
                      <p className="text-sm text-muted-foreground">Премиум пользователь</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-2">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                      <RatingStars className="mb-4" />
                      <p className="text-lg mb-4 italic">
                        "Шаблоны просто великолепные! Особенно люблю сезонные коллекции. Премиум точно стоит своих денег - качество впечатляет."
                      </p>
                      <p className="font-semibold">- Елена С.</p>
                      <p className="text-sm text-muted-foreground">Использует 3 месяца</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32">
          <div className="bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl p-12 lg:p-16 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                Ограниченное предложение
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Готовы творить волшебство?
              </h2>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
                Присоединяйтесь к тысячам счастливых пользователей и начните создавать незабываемые поздравления уже сегодня
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                  <Gift className="w-5 h-5 mr-2" />
                  Начать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
                  <Star className="w-5 h-5 mr-2" />
                  Оформить премиум
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
