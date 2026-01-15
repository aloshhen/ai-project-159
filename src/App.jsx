import { Star, Trophy, Award, Target, Shield, Volume, Music, Image, Calendar, Users, Globe, ChevronRight, Quote } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function App() {
  const historyRef = useRef(null)
  const achievementsRef = useRef(null)
  const quotesRef = useRef(null)
  const galleryRef = useRef(null)
  
  const historyInView = useInView(historyRef, { once: true })
  const achievementsInView = useInView(achievementsRef, { once: true })
  const quotesInView = useInView(quotesRef, { once: true })
  const galleryInView = useInView(galleryRef, { once: true })

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-soviet-darkred/95 backdrop-blur-md z-50 border-b-4 border-soviet-gold">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Star className="w-10 h-10 text-soviet-gold fill-soviet-gold" />
            <span className="text-3xl font-black text-soviet-gold tracking-tight">СССР</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('history')} className="text-gray-200 hover:text-soviet-gold transition-colors font-semibold">История</button>
            <button onClick={() => scrollToSection('achievements')} className="text-gray-200 hover:text-soviet-gold transition-colors font-semibold">Достижения</button>
            <button onClick={() => scrollToSection('quotes')} className="text-gray-200 hover:text-soviet-gold transition-colors font-semibold">Цитаты</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-200 hover:text-soviet-gold transition-colors font-semibold">Галерея</button>
          </div>
          <button onClick={() => scrollToSection('anthem')} className="bg-soviet-gold hover:bg-yellow-500 text-soviet-darkred px-6 py-2 rounded-sm font-black transition-all transform hover:scale-105 flex items-center gap-2">
            <Music className="w-5 h-5" />
            Гимн
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-soviet-red/20 via-transparent to-soviet-darkred/40" />
          <div className="absolute top-0 left-0 w-full h-full">
            <Star className="absolute top-20 left-10 w-16 h-16 text-soviet-gold/20 fill-soviet-gold/20" />
            <Star className="absolute top-40 right-20 w-12 h-12 text-soviet-gold/10 fill-soviet-gold/10" />
            <Star className="absolute bottom-20 left-1/4 w-20 h-20 text-soviet-gold/15 fill-soviet-gold/15" />
          </div>
        </div>
        <div className="relative z-10 container mx-auto text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <Star className="w-24 h-24 text-soviet-gold fill-soviet-gold" />
            </div>
            <h1 className="text-7xl md:text-9xl font-black text-soviet-red mb-6 tracking-tighter">
              СССР
            </h1>
            <p className="text-3xl md:text-4xl text-soviet-gold mb-8 font-bold tracking-tight">
              Союз Советских Социалистических Республик
            </p>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              История великой державы, которая изменила ход мировой истории, совершила прорыв в космос и создала уникальную культуру
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('history')} className="bg-soviet-red hover:bg-red-700 text-white px-10 py-4 rounded-sm text-lg font-black transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-soviet-red/50">
                Узнать больше
                <ChevronRight className="w-6 h-6" />
              </button>
              <button onClick={() => scrollToSection('gallery')} className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-sm text-lg font-bold transition-all backdrop-blur-sm border-2 border-soviet-gold">
                Галерея
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HISTORY */}
      <section id="history" className="py-20 px-6 bg-gradient-to-b from-transparent via-soviet-darkred/10 to-transparent">
        <div className="container mx-auto">
          <motion.div
            ref={historyRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: historyInView ? 1 : 0, y: historyInView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl font-black text-white text-center mb-4">
              <span className="text-soviet-gold">История</span> СССР
            </h2>
            <div className="flex justify-center mb-16">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-soviet-gold to-transparent"></div>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: historyInView ? 1 : 0, x: historyInView ? 0 : -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-sm border-l-4 border-soviet-red"
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-8 h-8 text-soviet-gold" />
                <h3 className="text-3xl font-black text-soviet-gold">1922 - 1991</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Советский Союз был образован 30 декабря 1922 года и существовал до 26 декабря 1991 года. Это было первое в мире социалистическое государство рабочих и крестьян.
              </p>
              <p className="text-gray-300 leading-relaxed">
                СССР объединял 15 союзных республик и стал одной из двух сверхдержав мира, оказав огромное влияние на мировую политику, экономику и культуру XX века.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: historyInView ? 1 : 0, x: historyInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-sm border-l-4 border-soviet-gold"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-soviet-gold" />
                <h3 className="text-3xl font-black text-soviet-gold">Многонациональное государство</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                В состав СССР входило более 100 национальностей. Страна простиралась на территории в 22,4 миллиона квадратных километров - крупнейшее государство в мире.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Население СССР к 1991 году составляло около 290 миллионов человек, что делало его третьей по численности населения страной после Китая и Индии.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            ref={achievementsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: achievementsInView ? 1 : 0, y: achievementsInView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl font-black text-white text-center mb-4">
              Великие <span className="text-soviet-red">Достижения</span>
            </h2>
            <div className="flex justify-center mb-16">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-soviet-red to-transparent"></div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: achievementsInView ? 1 : 0, y: achievementsInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-soviet-red/20 to-gray-800 p-8 rounded-sm border border-soviet-red/30 hover:border-soviet-red transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-soviet-red/30"
            >
              <div className="bg-soviet-red/30 w-20 h-20 rounded-sm flex items-center justify-center mb-6">
                <Target className="w-10 h-10 text-soviet-gold" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Космос</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Первый спутник (1957), первый человек в космосе - Юрий Гагарин (1961), первая женщина-космонавт Валентина Терешкова (1963).
              </p>
              <p className="text-soviet-gold font-semibold">
                СССР открыл эру освоения космоса
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: achievementsInView ? 1 : 0, y: achievementsInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-soviet-red/20 to-gray-800 p-8 rounded-sm border border-soviet-red/30 hover:border-soviet-red transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-soviet-red/30"
            >
              <div className="bg-soviet-red/30 w-20 h-20 rounded-sm flex items-center justify-center mb-6">
                <Trophy className="w-10 h-10 text-soviet-gold" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Спорт</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Доминирование на Олимпийских играх, легендарная хоккейная «Красная машина», непобедимые шахматисты во главе с Гарри Каспаровым.
              </p>
              <p className="text-soviet-gold font-semibold">
                Мировое спортивное лидерство
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: achievementsInView ? 1 : 0, y: achievementsInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-soviet-red/20 to-gray-800 p-8 rounded-sm border border-soviet-red/30 hover:border-soviet-red transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-soviet-red/30"
            >
              <div className="bg-soviet-red/30 w-20 h-20 rounded-sm flex items-center justify-center mb-6">
                <Music className="w-10 h-10 text-soviet-gold" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Культура</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Великие композиторы Шостакович и Прокофьев, балет Большого театра, кинематограф Эйзенштейна и Тарковского, литература мирового уровня.
              </p>
              <p className="text-soviet-gold font-semibold">
                Культурное наследие эпохи
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: achievementsInView ? 1 : 0, y: achievementsInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-soviet-red/20 to-gray-800 p-8 rounded-sm border border-soviet-red/30 hover:border-soviet-red transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-soviet-red/30"
            >
              <div className="bg-soviet-red/30 w-20 h-20 rounded-sm flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-soviet-gold" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Победа в ВОВ</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Решающий вклад в победу над фашизмом во Второй мировой войне. Подвиг советского народа спас мир от нацистской угрозы.
              </p>
              <p className="text-soviet-gold font-semibold">
                Великая Победа 1945 года
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: achievementsInView ? 1 : 0, y: achievementsInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-soviet-red/20 to-gray-800 p-8 rounded-sm border border-soviet-red/30 hover:border-soviet-red transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-soviet-red/30"
            >
              <div className="bg-soviet-red/30 w-20 h-20 rounded-sm flex items-center justify-center mb-6">
                <Award className="w-10 h-10 text-soviet-gold" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Наука</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Прорывы в ядерной физике, математике, медицине. Нобелевские лауреаты: Ландау, Капица, Басов, Прохоров, Солженицын, Сахаров.
              </p>
              <p className="text-soviet-gold font-semibold">
                Научные достижения мирового уровня
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: achievementsInView ? 1 : 0, y: achievementsInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-soviet-red/20 to-gray-800 p-8 rounded-sm border border-soviet-red/30 hover:border-soviet-red transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-soviet-red/30"
            >
              <div className="bg-soviet-red/30 w-20 h-20 rounded-sm flex items-center justify-center mb-6">
                <Globe className="w-10 h-10 text-soviet-gold" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Индустриализация</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Превращение аграрной страны в мощную индустриальную державу за 10-15 лет. Создание тяжелой промышленности, оборонного комплекса.
              </p>
              <p className="text-soviet-gold font-semibold">
                Промышленный прорыв
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section id="quotes" className="py-20 px-6 bg-gradient-to-b from-gray-900 via-soviet-darkred/20 to-gray-900">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            ref={quotesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: quotesInView ? 1 : 0, y: quotesInView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl font-black text-white text-center mb-4">
              <span className="text-soviet-gold">Цитаты</span> Великих Деятелей
            </h2>
            <div className="flex justify-center mb-16">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-soviet-gold to-transparent"></div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: quotesInView ? 1 : 0, x: quotesInView ? 0 : -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-soviet-red/10 to-transparent p-8 rounded-sm border-l-4 border-soviet-gold"
            >
              <div className="flex gap-4">
                <Quote className="w-12 h-12 text-soviet-gold/50 flex-shrink-0" />
                <div>
                  <p className="text-2xl text-white mb-4 italic leading-relaxed">
                    "Учиться, учиться и еще раз учиться!"
                  </p>
                  <p className="text-soviet-gold font-bold text-lg">— Владимир Ленин</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: quotesInView ? 1 : 0, x: quotesInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-l from-soviet-red/10 to-transparent p-8 rounded-sm border-r-4 border-soviet-gold"
            >
              <div className="flex gap-4 flex-row-reverse">
                <Quote className="w-12 h-12 text-soviet-gold/50 flex-shrink-0 transform rotate-180" />
                <div className="text-right">
                  <p className="text-2xl text-white mb-4 italic leading-relaxed">
                    "Кадры решают всё!"
                  </p>
                  <p className="text-soviet-gold font-bold text-lg">— Иосиф Сталин</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: quotesInView ? 1 : 0, x: quotesInView ? 0 : -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-soviet-red/10 to-transparent p-8 rounded-sm border-l-4 border-soviet-gold"
            >
              <div className="flex gap-4">
                <Quote className="w-12 h-12 text-soviet-gold/50 flex-shrink-0" />
                <div>
                  <p className="text-2xl text-white mb-4 italic leading-relaxed">
                    "Поехали!"
                  </p>
                  <p className="text-soviet-gold font-bold text-lg">— Юрий Гагарин</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            ref={galleryRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: galleryInView ? 1 : 0, y: galleryInView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl font-black text-white text-center mb-4">
              <span className="text-soviet-red">Галерея</span> Истории
            </h2>
            <div className="flex justify-center mb-16">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-soviet-red to-transparent"></div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: galleryInView ? 1 : 0, scale: galleryInView ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group overflow-hidden rounded-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=800&q=80" 
                alt="Советская архитектура"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Image className="w-6 h-6 text-soviet-gold mb-2" />
                  <p className="text-white font-bold text-lg">Советская архитектура</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: galleryInView ? 1 : 0, scale: galleryInView ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group overflow-hidden rounded-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" 
                alt="Космическая эра"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Target className="w-6 h-6 text-soviet-gold mb-2" />
                  <p className="text-white font-bold text-lg">Космическая эра СССР</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: galleryInView ? 1 : 0, scale: galleryInView ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group overflow-hidden rounded-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80" 
                alt="Советские плакаты"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Star className="w-6 h-6 text-soviet-gold mb-2" />
                  <p className="text-white font-bold text-lg">Советское искусство</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: galleryInView ? 1 : 0, scale: galleryInView ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group overflow-hidden rounded-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&q=80" 
                alt="Промышленность СССР"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Globe className="w-6 h-6 text-soviet-gold mb-2" />
                  <p className="text-white font-bold text-lg">Индустриализация</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: galleryInView ? 1 : 0, scale: galleryInView ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative group overflow-hidden rounded-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1541544181051-e46607bc22a4?w=800&q=80" 
                alt="Победа 1945"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Shield className="w-6 h-6 text-soviet-gold mb-2" />
                  <p className="text-white font-bold text-lg">Великая Победа</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: galleryInView ? 1 : 0, scale: galleryInView ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative group overflow-hidden rounded-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=800&q=80" 
                alt="Культура СССР"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Music className="w-6 h-6 text-soviet-gold mb-2" />
                  <p className="text-white font-bold text-lg">Советская культура</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ANTHEM SECTION */}
      <section id="anthem" className="py-20 px-6 bg-gradient-to-b from-gray-900 via-soviet-darkred/30 to-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-6xl font-black text-white mb-4">
            Гимн <span className="text-soviet-gold">СССР</span>
          </h2>
          <div className="flex justify-center mb-12">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-soviet-gold to-transparent"></div>
          </div>
          
          <div className="bg-gradient-to-br from-soviet-red/20 to-gray-800 p-12 rounded-sm border-2 border-soviet-gold/30">
            <div className="flex justify-center mb-8">
              <div className="bg-soviet-gold/20 w-24 h-24 rounded-full flex items-center justify-center">
                <Volume className="w-12 h-12 text-soviet-gold" />
              </div>
            </div>
            <p className="text-white text-lg mb-6 leading-relaxed italic">
              "Союз нерушимый республик свободных<br />
              Сплотила навеки Великая Русь.<br />
              Да здравствует созданный волей народов<br />
              Единый, могучий Советский Союз!"
            </p>
            <button className="bg-soviet-gold hover:bg-yellow-500 text-soviet-darkred px-10 py-4 rounded-sm text-lg font-black transition-all transform hover:scale-105 flex items-center gap-3 mx-auto shadow-lg shadow-soviet-gold/30">
              <Music className="w-6 h-6" />
              Слушать гимн СССР
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-soviet-darkred border-t-4 border-soviet-gold py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-6">
              <Star className="w-12 h-12 text-soviet-gold fill-soviet-gold" />
              <span className="text-4xl font-black text-soviet-gold tracking-tight">СССР</span>
            </div>
            <p className="text-gray-300 text-center mb-4 max-w-2xl">
              Историческая память о великой державе, которая оставила неизгладимый след в мировой истории
            </p>
            <div className="text-soviet-gold text-sm font-semibold">
              1922 - 1991
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App