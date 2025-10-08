"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, PlusCircle, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

type Event = {
  id: number;
  date: Date;
  name: string;
  occasion: string;
};

export function EventCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [events, setEvents] = useState<Event[]>([
    { id: 1, date: new Date(2025, 10, 20), name: "Анна", occasion: "День рождения" },
    { id: 2, date: new Date(2025, 11, 31), name: "Коллеги", occasion: "Новый Год" },
  ]);

  const [newEventName, setNewEventName] = useState("");
  const [newEventOccasion, setNewEventOccasion] = useState("");

  const handleAddEvent = () => {
    if (date && newEventName && newEventOccasion) {
      const newEvent: Event = {
        id: Date.now(),
        date: date,
        name: newEventName,
        occasion: newEventOccasion,
      };
      setEvents([...events, newEvent]);
      setNewEventName("");
      setNewEventOccasion("");
    }
  };

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const eventsForSelectedDate = date ? events.filter(event => format(event.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')) : [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          locale={ru}
          modifiers={{
            events: events.map(e => e.date)
          }}
          modifiersStyles={{
            events: {
              fontWeight: 'bold',
              textDecoration: 'underline',
            }
          }}
        />
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>События</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Добавить событие</h4>
              <div className="space-y-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP", { locale: ru }) : <span>Выберите дату</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
                <Input placeholder="Имя (например, Анна)" value={newEventName} onChange={(e) => setNewEventName(e.target.value)} />
                <Input placeholder="Повод (например, День Рождения)" value={newEventOccasion} onChange={(e) => setNewEventOccasion(e.target.value)} />
                <Button onClick={handleAddEvent} className="w-full">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Добавить
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Предстоящие события</h4>
              {events.length > 0 ? (
                <ul className="space-y-2">
                  {events.sort((a,b) => a.date.getTime() - b.date.getTime()).map(event => (
                    <li key={event.id} className="flex items-center justify-between p-2 rounded-md border">
                      <div>
                        <p className="font-medium">{event.name} - <span className="text-muted-foreground">{event.occasion}</span></p>
                        <p className="text-sm text-muted-foreground">{format(event.date, "PPP", { locale: ru })}</p>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteEvent(event.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">Событий пока нет.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}