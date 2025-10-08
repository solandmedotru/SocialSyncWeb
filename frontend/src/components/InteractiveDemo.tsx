"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Loader2 } from "lucide-react";

export function InteractiveDemo() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult("");
    setTimeout(() => {
      setResult("Дорогой друг! Поздравляю тебя с Днем Рождения! Желаю счастья, здоровья и успехов во всех начинаниях. Пусть каждый твой день будет наполнен радостью и улыбками!");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-primary" />
          Попробуйте прямо сейчас!
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="Кому (например, Анна)" />
            <Select defaultValue="birthday">
              <SelectTrigger>
                <SelectValue placeholder="Повод" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="birthday">День рождения</SelectItem>
                <SelectItem value="new-year">Новый Год</SelectItem>
                <SelectItem value="wedding">Свадьба</SelectItem>
                <SelectItem value="anniversary">Годовщина</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            Сгенерировать пример
          </Button>
        </form>
        {result && (
          <div className="mt-6 p-4 bg-muted rounded-lg border">
            <p className="text-muted-foreground">{result}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}