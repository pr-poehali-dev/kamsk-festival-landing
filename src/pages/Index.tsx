import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, MapPin, Users, Clock, Theater, Award, Heart } from 'lucide-react';
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
      case 'спектакль': return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'лаборатория': return 'bg-gradient-to-r from-orange-500 to-yellow-500';
      case 'дискуссия': return 'bg-gradient-to-r from-blue-500 to-indigo-600';
      case 'мастер-класс': return 'bg-gradient-to-r from-green-500 to-teal-600';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      {/* Героический блок */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-orange-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <Icon name="Theater" size={48} className="text-orange-400 mr-4" />
              <div className="text-6xl">🎭</div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif tracking-tight">
              Фестиваль-лаборатория
              <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                «Камский»
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Губаха — столица театральных экспериментов!<br/>
              Передвижной фестиваль для малых городов Пермского края
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center text-white">
                <Icon name="Calendar" size={24} className="mr-2 text-orange-400" />
                <span className="text-2xl font-semibold">27 ноября — 2 декабря 2025</span>
              </div>
              <div className="flex items-center text-white">
                <Icon name="MapPin" size={24} className="mr-2 text-pink-400" />
                <span className="text-xl">г. Губаха, ДК «Энергетик»</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
                🎫 Купить билет
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg">
                📝 Регистрация в лабораторию
              </Button>
            </div>
            
            <div className="mt-12 flex justify-center items-center gap-6 flex-wrap">
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
                <Icon name="Award" size={16} className="mr-2" />
                Поддержка Президентского фонда
              </Badge>
              <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2">
                <Icon name="Heart" size={16} className="mr-2" />
                Диплом «Отличник»
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Программа фестиваля */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Программа фестиваля
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
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
                className={`capitalize ${
                  selectedFilter === filter 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                    : 'border-white text-white hover:bg-white hover:text-purple-900'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* События */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge className={`${getEventColor(event.type)} text-white px-3 py-1 capitalize`}>
                      {event.type}
                    </Badge>
                    <div className="text-right text-white">
                      <div className="font-semibold">{event.date}</div>
                      <div className="text-sm text-gray-300">{event.time}</div>
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl font-serif">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 mb-4">{event.description}</p>
                  <div className="flex items-center text-gray-300">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Творческие лаборатории
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Уникальная лаборатория, которой нет ни на одном фестивале — слова Александра Вислова
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Информация о лабораториях */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border-orange-400/30">
                <CardHeader>
                  <CardTitle className="text-white text-2xl font-serif flex items-center">
                    <Icon name="Users" size={28} className="mr-3 text-orange-400" />
                    Для кого?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-200 space-y-3">
                  <p>• Молодые актеры и режиссеры</p>
                  <p>• Студенты театральных вузов</p>
                  <p>• Театральные педагоги</p>
                  <p>• Критики и исследователи</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-400/30">
                <CardHeader>
                  <CardTitle className="text-white text-2xl font-serif flex items-center">
                    <Icon name="Clock" size={28} className="mr-3 text-pink-400" />
                    Формат
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-200 space-y-3">
                  <p>• Интенсивные 3-дневные мастерские</p>
                  <p>• Работа с ведущими экспертами</p>
                  <p>• Создание эскизов спектаклей</p>
                  <p>• Презентация результатов</p>
                </CardContent>
              </Card>
            </div>

            {/* Форма регистрации */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-serif">
                  Регистрация на лаборатории
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={registrationForm.name}
                  onChange={(e) => setRegistrationForm({...registrationForm, name: e.target.value})}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={registrationForm.email}
                  onChange={(e) => setRegistrationForm({...registrationForm, email: e.target.value})}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                />
                <Input
                  placeholder="Профессия/специализация"
                  value={registrationForm.profession}
                  onChange={(e) => setRegistrationForm({...registrationForm, profession: e.target.value})}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                />
                <Textarea
                  placeholder="Ссылка на портфолио или описание опыта"
                  value={registrationForm.portfolio}
                  onChange={(e) => setRegistrationForm({...registrationForm, portfolio: e.target.value})}
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 min-h-[100px]"
                />
                <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white">
                  📋 Подать заявку
                </Button>
                <p className="text-sm text-gray-300 text-center">
                  Заявки принимаются до 20 ноября 2025 года
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Информация о городе */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Губаха ждет вас
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Информация о транспорте, проживании и том, что стоит увидеть в городе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white text-xl">Как добраться</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-200">
                <p>Новые дороги делают поездку комфортной</p>
                <p className="mt-2">• Автобус из Перми — 3 часа</p>
                <p>• Из Березников — 1,5 часа</p>
                <p>• Автомобиль: трасса А-57</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🏨</span>
                </div>
                <CardTitle className="text-white text-xl">Проживание</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-200">
                <p>Варианты размещения в Губахе</p>
                <p className="mt-2">• Гостиница «Северный Урал»</p>
                <p>• Мини-отели</p>
                <p>• Частные апартаменты</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">⛰️</span>
                </div>
                <CardTitle className="text-white text-xl">Достопримечательности</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-200">
                <p>Что посмотреть в Губахе</p>
                <p className="mt-2">• Гора Крестовая</p>
                <p>• Усьвинские столбы</p>
                <p>• Горнолыжный комплекс</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Партнеры */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Партнеры фестиваля
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              'Президентский фонд культурных инициатив',
              'Агентство новых технологий (г. Пермь)',
              'Пермское отделение СТД',
              'Администрация г. Губаха'
            ].map((partner, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <Icon name="Award" size={32} className="text-white" />
                </div>
                <p className="text-white text-sm">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-serif">
            Контакты
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">Организационный комитет</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-200">
                <p>📧 festival@kamsky.ru</p>
                <p>📱 +7 (342) 123-45-67</p>
                <p>💬 Telegram: @kamsky_festival</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">Социальные сети</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-200">
                <p>📘 ВКонтакте: vk.com/kamsky_fest</p>
                <p>📸 Instagram: @kamsky_festival</p>
                <p>🎥 YouTube: Фестиваль Камский</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <p className="text-gray-300 text-lg">
              Следите за новостями фестиваля и не пропустите регистрацию!
            </p>
            <Button size="lg" className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4">
              🚀 Подписаться на обновления
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;