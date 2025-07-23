import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'спектакль' | 'лаборатория' | 'дискуссия' | 'мастер-класс';
  description: string;
  venue: string;
}

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Ариадна',
    date: '27.11.2025',
    time: '19:00',
    type: 'спектакль',
    description: 'Спектакль, созданный из эскиза на прошлом фестивале «Камский»',
    venue: 'ДК «Энергетик»'
  },
  {
    id: '2',
    title: 'Театр русских поэтов',
    date: '28.11.2025',
    time: '14:00',
    type: 'лаборатория',
    description: 'Творческая лаборатория под руководством ведущих экспертов',
    venue: 'Малый зал ДК'
  },
  {
    id: '3',
    title: 'Будущее театра в малых городах',
    date: '29.11.2025',
    time: '16:00',
    type: 'дискуссия',
    description: 'Профессиональная дискуссия с участием театральных критиков',
    venue: 'Конференц-зал'
  }
];

const Index = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('все');
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    profession: '',
    portfolio: '',
    experience: ''
  });

  const filteredEvents = selectedFilter === 'все' 
    ? mockEvents 
    : mockEvents.filter(event => event.type === selectedFilter);

  const getEventColor = (type: string) => {
    switch(type) {
      case 'спектакль': return 'bg-brand-blue';
      case 'лаборатория': return 'bg-brand-dark';
      case 'дискуссия': return 'bg-brand-blue/80';
      case 'мастер-класс': return 'bg-brand-dark/80';
      default: return 'bg-brand-blue';
    }
  };

  return (
    <div className="min-h-screen bg-brand-white font-unbounded">
      {/* Героический блок */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-dark/20">
              <Icon name="Theater" size={20} className="text-brand-blue" />
              <span className="text-sm font-medium text-brand-dark uppercase tracking-wider">Театральный фестиваль</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-brand-dark leading-none tracking-tight">
              КАМСКИЙ
            </h1>
            
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-brand-dark/70 font-light">
                Фестиваль-лаборатория
              </p>
              <p className="text-lg text-brand-dark/60">
                Губаха — столица театральных экспериментов
              </p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-8 text-brand-dark">
              <div className="flex items-center gap-3">
                <Icon name="Calendar" size={20} className="text-brand-blue" />
                <span className="font-medium">27 ноября — 2 декабря 2025</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={20} className="text-brand-blue" />
                <span className="font-medium">г. Губаха, ДК «Энергетик»</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-full font-medium"
              >
                Купить билет
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white px-8 py-4 rounded-full font-medium"
              >
                Регистрация в лабораторию
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 px-4 py-2 rounded-full">
              <Icon name="Award" size={16} className="mr-2" />
              Поддержка Президентского фонда
            </Badge>
            <Badge className="bg-brand-dark/10 text-brand-dark border-brand-dark/20 px-4 py-2 rounded-full">
              <Icon name="Star" size={16} className="mr-2" />
              Диплом «Отличник»
            </Badge>
          </div>
        </div>
      </section>

      {/* Программа фестиваля */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark">
              ПРОГРАММА
            </h2>
            <p className="text-lg text-brand-dark/60 max-w-2xl mx-auto">
              Интерактивная сетка событий с уникальными спектаклями, творческими лабораториями и профессиональными дискуссиями
            </p>
          </div>

          {/* Фильтры */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['все', 'спектакль', 'лаборатория', 'дискуссия', 'мастер-класс'].map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className={`capitalize rounded-full px-6 py-3 font-medium transition-all ${
                  selectedFilter === filter 
                    ? 'bg-brand-blue text-white shadow-lg' 
                    : 'border-brand-dark/20 text-brand-dark hover:bg-brand-dark hover:text-white'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* События */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <Card key={event.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className={`${getEventColor(event.type)} text-white px-3 py-1 capitalize rounded-full font-medium`}>
                      {event.type}
                    </Badge>
                    <div className="text-right text-brand-dark">
                      <div className="font-semibold">{event.date}</div>
                      <div className="text-sm opacity-60">{event.time}</div>
                    </div>
                  </div>
                  <CardTitle className="text-brand-dark text-xl font-bold leading-tight">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-dark/70 mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex items-center text-brand-dark/60">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    <span className="text-sm">{event.venue}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Творческие лаборатории */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark">
              ЛАБОРАТОРИИ
            </h2>
            <p className="text-lg text-brand-dark/60 max-w-3xl mx-auto">
              Уникальная лаборатория, которой нет ни на одном фестивале — слова Александра Вислова
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Информация о лабораториях */}
            <div className="space-y-8">
              <Card className="bg-brand-blue/5 border-brand-blue/20 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-brand-dark text-2xl font-bold flex items-center">
                    <Icon name="Users" size={28} className="mr-3 text-brand-blue" />
                    Для кого?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-brand-dark/70 space-y-3">
                  <p>• Молодые актеры и режиссеры</p>
                  <p>• Студенты театральных вузов</p>
                  <p>• Театральные педагоги</p>
                  <p>• Критики и исследователи</p>
                </CardContent>
              </Card>

              <Card className="bg-brand-dark/5 border-brand-dark/20 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-brand-dark text-2xl font-bold flex items-center">
                    <Icon name="Clock" size={28} className="mr-3 text-brand-dark" />
                    Формат
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-brand-dark/70 space-y-3">
                  <p>• Интенсивные 3-дневные мастерские</p>
                  <p>• Работа с ведущими экспертами</p>
                  <p>• Создание эскизов спектаклей</p>
                  <p>• Презентация результатов</p>
                </CardContent>
              </Card>
            </div>

            {/* Форма регистрации */}
            <Card className="bg-gray-50 border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-brand-dark text-2xl font-bold">
                  Регистрация на лаборатории
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Input
                  placeholder="Ваше имя"
                  value={registrationForm.name}
                  onChange={(e) => setRegistrationForm({...registrationForm, name: e.target.value})}
                  className="border-brand-dark/20 rounded-xl h-12 px-4 focus:border-brand-blue"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={registrationForm.email}
                  onChange={(e) => setRegistrationForm({...registrationForm, email: e.target.value})}
                  className="border-brand-dark/20 rounded-xl h-12 px-4 focus:border-brand-blue"
                />
                <Input
                  placeholder="Профессия/специализация"
                  value={registrationForm.profession}
                  onChange={(e) => setRegistrationForm({...registrationForm, profession: e.target.value})}
                  className="border-brand-dark/20 rounded-xl h-12 px-4 focus:border-brand-blue"
                />
                <Textarea
                  placeholder="Ссылка на портфолио или описание опыта"
                  value={registrationForm.portfolio}
                  onChange={(e) => setRegistrationForm({...registrationForm, portfolio: e.target.value})}
                  className="border-brand-dark/20 rounded-xl px-4 py-3 min-h-[120px] focus:border-brand-blue resize-none"
                />
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white h-12 rounded-xl font-medium">
                  Подать заявку
                </Button>
                <p className="text-sm text-brand-dark/60 text-center">
                  Заявки принимаются до 20 ноября 2025 года
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Информация о городе */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark">
              ГУБАХА
            </h2>
            <p className="text-lg text-brand-dark/60 max-w-3xl mx-auto">
              Информация о транспорте, проживании и том, что стоит увидеть в городе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <CardTitle className="text-brand-dark text-xl font-bold">Как добраться</CardTitle>
              </CardHeader>
              <CardContent className="text-brand-dark/70">
                <p className="mb-4">Новые дороги делают поездку комфортной</p>
                <div className="space-y-2 text-sm">
                  <p>• Автобус из Перми — 3 часа</p>
                  <p>• Из Березников — 1,5 часа</p>
                  <p>• Автомобиль: трасса А-57</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🏨</span>
                </div>
                <CardTitle className="text-brand-dark text-xl font-bold">Проживание</CardTitle>
              </CardHeader>
              <CardContent className="text-brand-dark/70">
                <p className="mb-4">Варианты размещения в Губахе</p>
                <div className="space-y-2 text-sm">
                  <p>• Гостиница «Северный Урал»</p>
                  <p>• Мини-отели</p>
                  <p>• Частные апартаменты</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">⛰️</span>
                </div>
                <CardTitle className="text-brand-dark text-xl font-bold">Достопримечательности</CardTitle>
              </CardHeader>
              <CardContent className="text-brand-dark/70">
                <p className="mb-4">Что посмотреть в Губахе</p>
                <div className="space-y-2 text-sm">
                  <p>• Гора Крестовая</p>
                  <p>• Усьвинские столбы</p>
                  <p>• Горнолыжный комплекс</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Партнеры */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-4">
              ПАРТНЕРЫ
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              'Президентский фонд культурных инициатив',
              'Агентство новых технологий (г. Пермь)',
              'Пермское отделение СТД',
              'Администрация г. Губаха'
            ].map((partner, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-dark/10 group-hover:bg-brand-blue group-hover:border-brand-blue transition-all">
                  <Icon name="Award" size={32} className="text-brand-dark group-hover:text-white transition-colors" />
                </div>
                <p className="text-brand-dark text-sm font-medium leading-tight">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-12">
            КОНТАКТЫ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-brand-dark text-xl font-bold">Организационный комитет</CardTitle>
              </CardHeader>
              <CardContent className="text-brand-dark/70 space-y-3">
                <p className="flex items-center justify-center gap-2">
                  <Icon name="Mail" size={16} />
                  festival@kamsky.ru
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (342) 123-45-67
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  @kamsky_festival
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <CardTitle className="text-brand-dark text-xl font-bold">Социальные сети</CardTitle>
              </CardHeader>
              <CardContent className="text-brand-dark/70 space-y-3">
                <p className="flex items-center justify-center gap-2">
                  <Icon name="Users" size={16} />
                  vk.com/kamsky_fest
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Icon name="Instagram" size={16} />
                  @kamsky_festival
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Icon name="Youtube" size={16} />
                  Фестиваль Камский
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <p className="text-brand-dark/60 text-lg">
              Следите за новостями фестиваля и не пропустите регистрацию!
            </p>
            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 rounded-full font-medium">
              Подписаться на обновления
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;