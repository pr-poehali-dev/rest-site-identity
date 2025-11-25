import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('');

  const rooms = [
    {
      title: 'Стандартный номер',
      description: 'Уютный номер с видом на лес',
      price: '3 500',
      features: ['2 человека', 'WiFi', 'Кондиционер', 'Телевизор'],
      image: 'https://cdn.poehali.dev/projects/c8bcb35e-2771-42ed-9f0e-d752b65be1e2/files/a47cd6d1-1fef-4b2c-a113-350a9da56d4a.jpg'
    },
    {
      title: 'Люкс',
      description: 'Просторный номер с балконом и видом на озеро',
      price: '5 500',
      features: ['2-4 человека', 'WiFi', 'Кондиционер', 'Джакузи', 'Мини-бар'],
      image: 'https://cdn.poehali.dev/projects/c8bcb35e-2771-42ed-9f0e-d752b65be1e2/files/a47cd6d1-1fef-4b2c-a113-350a9da56d4a.jpg'
    },
    {
      title: 'Семейный коттедж',
      description: 'Отдельный коттедж для всей семьи',
      price: '12 000',
      features: ['4-6 человек', 'WiFi', 'Кухня', 'Камин', 'Терраса'],
      image: 'https://cdn.poehali.dev/projects/c8bcb35e-2771-42ed-9f0e-d752b65be1e2/files/22b2cfae-0298-4057-a981-1f9a21f7192c.jpg'
    }
  ];

  const services = [
    { icon: 'Waves', title: 'Пляж', description: 'Собственный оборудованный пляж с шезлонгами' },
    { icon: 'Utensils', title: 'Ресторан', description: 'Ресторан с видом на озеро и европейской кухней' },
    { icon: 'Bike', title: 'Прокат', description: 'Велосипеды, лодки, катамараны' },
    { icon: 'Dumbbell', title: 'Спортзал', description: 'Современный тренажёрный зал' },
    { icon: 'Flame', title: 'Баня', description: 'Русская баня и финская сауна' },
    { icon: 'Baby', title: 'Детская зона', description: 'Игровая площадка и детская комната' }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      date: '15 ноября 2024',
      rating: 5,
      text: 'Прекрасное место для семейного отдыха! Чистый воздух, красивая природа, отличный сервис.'
    },
    {
      name: 'Дмитрий Иванов',
      date: '8 ноября 2024',
      rating: 5,
      text: 'Отдыхали с семьей на выходных. Дети в восторге от игровой площадки, а мы наслаждались тишиной и спокойствием.'
    },
    {
      name: 'Елена Смирнова',
      date: '1 ноября 2024',
      rating: 4,
      text: 'Замечательная база отдыха. Особенно понравился ресторан и баня. Обязательно вернёмся!'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <Icon name="Trees" className="text-primary-foreground" size={24} />
            </div>
            <span className="font-heading font-bold text-xl text-primary">База отдыха</span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            {['rooms', 'services', 'prices', 'gallery', 'reviews', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {section === 'rooms' && 'Номера'}
                {section === 'services' && 'Услуги'}
                {section === 'prices' && 'Цены'}
                {section === 'gallery' && 'Галерея'}
                {section === 'reviews' && 'Отзывы'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </nav>
          
          <Button onClick={() => scrollToSection('booking')}>
            Забронировать
          </Button>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-primary/90"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/c8bcb35e-2771-42ed-9f0e-d752b65be1e2/files/22b2cfae-0298-4057-a981-1f9a21f7192c.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'multiply'
          }}
        />
        
        <div className="relative z-10 container text-center text-white animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Отдых у озера
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Уютная база отдыха в окружении природы. Комфортные номера, чистый воздух и незабываемые впечатления
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => scrollToSection('rooms')}>
              <Icon name="Bed" className="mr-2" size={20} />
              Выбрать номер
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30" onClick={() => scrollToSection('contacts')}>
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section className="py-4 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <Icon name="MapPin" className="mx-auto mb-2 text-primary" size={32} />
              <div className="font-heading text-2xl font-bold text-primary">2 км</div>
              <div className="text-sm text-muted-foreground">от города</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="Home" className="mx-auto mb-2 text-primary" size={32} />
              <div className="font-heading text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">номеров</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Icon name="Users" className="mx-auto mb-2 text-primary" size={32} />
              <div className="font-heading text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">гостей одновременно</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Icon name="Star" className="mx-auto mb-2 text-primary" size={32} />
              <div className="font-heading text-2xl font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground">рейтинг</div>
            </div>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">Номера и размещение</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите идеальный вариант для вашего отдыха — от уютных стандартных номеров до просторных семейных коттеджей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-48 bg-muted relative overflow-hidden">
                  <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    от {room.price} ₽/сутки
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">{room.title}</CardTitle>
                  <CardDescription>{room.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full" onClick={() => scrollToSection('booking')}>
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">Услуги и развлечения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы позаботились о том, чтобы ваш отдых был максимально комфортным и насыщенным
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-primary/50 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">Цены и тарифы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей. Специальные предложения для длительного проживания
            </p>
          </div>
          
          <Tabs defaultValue="standard" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="standard">Стандарт</TabsTrigger>
              <TabsTrigger value="lux">Люкс</TabsTrigger>
              <TabsTrigger value="cottage">Коттедж</TabsTrigger>
            </TabsList>
            
            <TabsContent value="standard" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Стандартный номер</CardTitle>
                  <CardDescription>Идеально для пар и одиночного отдыха</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="text-muted-foreground">Будни (пн-чт)</span>
                    <span className="font-heading text-xl font-semibold text-primary">3 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="text-muted-foreground">Выходные (пт-вс)</span>
                    <span className="font-heading text-xl font-semibold text-primary">4 200 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">От 7 суток</span>
                    <span className="font-heading text-xl font-semibold text-accent">3 000 ₽</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="lux" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Люкс</CardTitle>
                  <CardDescription>Повышенный комфорт и отличный вид</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="text-muted-foreground">Будни (пн-чт)</span>
                    <span className="font-heading text-xl font-semibold text-primary">5 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="text-muted-foreground">Выходные (пт-вс)</span>
                    <span className="font-heading text-xl font-semibold text-primary">6 500 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">От 7 суток</span>
                    <span className="font-heading text-xl font-semibold text-accent">4 800 ₽</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="cottage" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Семейный коттедж</CardTitle>
                  <CardDescription>Отдельный дом для всей семьи</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="text-muted-foreground">Будни (пн-чт)</span>
                    <span className="font-heading text-xl font-semibold text-primary">12 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="text-muted-foreground">Выходные (пт-вс)</span>
                    <span className="font-heading text-xl font-semibold text-primary">15 000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">От 7 суток</span>
                    <span className="font-heading text-xl font-semibold text-accent">10 500 ₽</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">Галерея фотографий</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Посмотрите, как выглядит наша база отдыха и почувствуйте атмосферу спокойствия
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div 
                key={index} 
                className="aspect-video bg-muted rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src="/placeholder.svg" alt={`Фото ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">Отзывы гостей</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Узнайте, что говорят наши гости о своём отдыхе
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="font-heading text-lg">{review.name}</CardTitle>
                      <CardDescription className="text-sm">{review.date}</CardDescription>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-accent fill-accent" size={16} />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl animate-scale-in">
              <CardHeader className="text-center">
                <CardTitle className="font-heading text-3xl text-primary">Онлайн бронирование</CardTitle>
                <CardDescription className="text-base">
                  Заполните форму, и мы свяжемся с вами для подтверждения бронирования
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (900) 000-00-00" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="example@mail.ru" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="checkin">Дата заезда</Label>
                      <Input id="checkin" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="checkout">Дата выезда</Label>
                      <Input id="checkout" type="date" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="guests">Количество гостей</Label>
                    <Input id="guests" type="number" min="1" placeholder="2" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea id="message" placeholder="Дополнительные пожелания или вопросы" rows={4} />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-accent/10">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">🎉 Акции и спецпредложения</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-accent/50 bg-gradient-to-br from-accent/10 to-transparent animate-scale-in">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-accent text-accent-foreground">Скидка 15%</Badge>
                <CardTitle className="font-heading text-xl">Раннее бронирование</CardTitle>
                <CardDescription>
                  Забронируйте номер за 30 дней до заезда и получите скидку 15% на проживание
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-secondary/50 bg-gradient-to-br from-secondary/10 to-transparent animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-secondary text-secondary-foreground">Акция</Badge>
                <CardTitle className="font-heading text-xl">Длительное проживание</CardTitle>
                <CardDescription>
                  При бронировании от 7 суток — каждый 8-й день в подарок!
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">Контакты и как добраться</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы находимся в живописном месте в 2 км от города
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">Адрес</div>
                    <div className="text-sm text-muted-foreground">Озёрная ул., 15, д. Сосновка</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">Телефон</div>
                    <div className="text-sm text-muted-foreground">+7 (900) 123-45-67</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">info@baza-otdyha.ru</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-medium">Режим работы</div>
                    <div className="text-sm text-muted-foreground">Круглосуточно, без выходных</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Как добраться</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="car">
                    <AccordionTrigger>
                      <div className="flex items-center gap-2">
                        <Icon name="Car" className="text-primary" size={20} />
                        <span>На автомобиле</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Выезд из города по Озёрному шоссе, через 2 км поворот направо по указателю "База отдыха". Парковка бесплатная.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="bus">
                    <AccordionTrigger>
                      <div className="flex items-center gap-2">
                        <Icon name="Bus" className="text-primary" size={20} />
                        <span>На общественном транспорте</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Автобус №15 от центрального вокзала до остановки "Сосновка", далее 500 метров пешком по указателям.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="taxi">
                    <AccordionTrigger>
                      <div className="flex items-center gap-2">
                        <Icon name="Smartphone" className="text-primary" size={20} />
                        <span>На такси</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Закажите такси до адреса "Озёрная ул., 15, д. Сосновка". Время в пути от центра города — 10 минут, стоимость около 300 ₽.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Icon name="Trees" className="text-primary-foreground" size={24} />
                </div>
                <span className="font-heading font-bold text-xl">База отдыха</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Ваш идеальный отдых в окружении природы
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Быстрые ссылки</h3>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('rooms')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Номера
                </button>
                <button onClick={() => scrollToSection('services')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Услуги
                </button>
                <button onClick={() => scrollToSection('prices')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Цены
                </button>
                <button onClick={() => scrollToSection('contacts')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Контакты
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (900) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@baza-otdyha.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>д. Сосновка, Озёрная ул., 15</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© 2024 База отдыха. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;