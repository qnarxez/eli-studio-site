import { Button } from './components/Button';
import { ServiceCard } from './components/ServiceCard';
import { ProcessStep } from './components/ProcessStep';
import { PortfolioItem } from './components/PortfolioItem';
import { MetricCard } from './components/MetricCard';
import { FeatureCard } from './components/FeatureCard';
import { ChatAssistant } from './components/ChatAssistant';
import { Smartphone, Video, Target, BarChart, ChevronDown, Zap } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      console.log('Phone number submitted:', phoneNumber);
      setIsSubmitted(true);
      setTimeout(() => {
        setShowForm(false);
        setIsSubmitted(false);
        setPhoneNumber('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'rgb(var(--color-bg-dark))' }}>
      {/* Navigation - DARK */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 backdrop-blur-xl border-b border-[#800080] border-opacity-20" style={{ background: 'rgb(var(--color-bg-dark))', opacity: 0.95 }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#800080] animate-pulse shadow-[0_0_12px_rgba(128,0,128,0.8)]"></div>
            <h3 className="text-white">ELI studio</h3>
          </div>
          <div className="flex items-center gap-5">
            <Button onClick={scrollToContact}>Бесплатная консультация</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - DARK BACKGROUND with PURPLE HIGHLIGHTS */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden" style={{ background: 'rgb(var(--color-bg-dark))' }}>
        {/* Purple gradient background - enhanced */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-[--color-primary] rounded-full blur-[200px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-purple-700 rounded-full blur-[200px] opacity-25"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-10 inline-block">
            <div className="px-8 py-4 bg-[--color-bg-dark-alt] rounded-full border-2 border-[--color-primary] shadow-[0_0_40px_rgba(128,0,128,0.4)]">
              <span className="text-[--color-primary] font-bold tracking-wider uppercase text-sm">Видеопродакшн нового поколения</span>
            </div>
          </div>

          {/* Main headline - WHITE with PURPLE highlight on key word */}
          <h1 className="mb-8 text-[--color-text-dark-bg] leading-tight">
            Вертикальное видео,<br />
            которое приводит{' '}
            <span className="text-[--color-primary] relative inline-block">
              результат
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-[--color-primary] opacity-40 blur-sm"></span>
            </span>
          </h1>

          {/* Subheadline - LIGHT GRAY with PURPLE highlight */}
          <p className="max-w-3xl mx-auto mb-5 text-xl text-[--color-text-dark-bg-secondary] leading-relaxed">
            Полный цикл производства TikTok, Reels и Shorts — от{' '}
            <span className="text-[--color-primary] font-medium">стратегии</span> до{' '}
            <span className="text-[--color-primary] font-medium">роста продаж</span>
          </p>

          {/* Positioning line - MUTED GRAY with PURPLE highlight */}
          <p className="max-w-2xl mx-auto mb-14 text-[--color-text-dark-bg-muted] leading-relaxed">
            Специализируемся на коротких форматах. Знаем{' '}
            <span className="text-[--color-primary]">алгоритмы</span>. Создаем контент, который{' '}
            <span className="text-[--color-primary]">онвертирует</span>.
          </p>

          {/* CTA Buttons - PURPLE primary */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
            <Button size="large" onClick={scrollToContact}>
              Обсудить проект
            </Button>
            <button 
              onClick={scrollToServices}
              className="px-10 py-5 text-base text-[--color-text-dark-bg-muted] hover:text-[--color-text-dark-bg] transition-colors duration-300 underline underline-offset-4 decoration-[--color-primary] decoration-2"
            >
              Смотреть кейсы
            </button>
          </div>

          {/* Key metrics - PURPLE numbers on DARK */}
          <div className="mb-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
              <MetricCard value="120+" label="Проектов" />
              <MetricCard value="50M+" label="Просмотров" />
              <MetricCard value="3-5x" label="Рост охвата" />
              <MetricCard value="40%" label="+ конверсии" />
            </div>
          </div>
          <p className="text-sm text-[--color-text-dark-bg-muted] italic">
            * Средние показатели по клиентским проектам за последние 12 месяцев
          </p>

          {/* Scroll indicator */}
          <div className="mt-20">
            <ChevronDown className="mx-auto text-[--color-primary] animate-bounce" size={36} strokeWidth={2} />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[--color-primary] to-transparent opacity-40"></div>

      {/* Services Section - LIGHT BACKGROUND with PURPLE highlights */}
      <section id="services" className="px-6 py-36 relative overflow-hidden" style={{ background: 'rgb(var(--color-bg-light))' }}>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-5 py-2.5 border-2 border-[--color-primary] border-opacity-60 rounded-full text-[--color-primary] text-sm font-bold uppercase tracking-wider">
                Услуги
              </span>
            </div>
            <h2 className="mb-8 text-[--color-text-light-bg] leading-tight">
              Создаем видео,{' '}
              <span className="text-[--color-primary] relative inline-block">
                которые работают
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-[--color-primary] opacity-30"></span>
              </span>
            </h2>
            <p className="text-[--color-text-light-bg-secondary] max-w-2xl mx-auto text-lg leading-relaxed">
              Специализаия на вертикальных форматах с фокусом на{' '}
              <span className="text-[--color-primary] font-medium">алгоритмы</span> и{' '}
              <span className="text-[--color-primary] font-medium">конверсии</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <ServiceCard
              icon={Smartphone}
              title="Короткие вертикальные видео"
              items={[
                'TikTok, Reels, YouTube Shorts',
                'Оптимизация под алгоритмы платформ',
                'Фокус на виральности и охвате'
              ]}
              featured={true}
            />
            <ServiceCard
              icon={Video}
              title="Полноформатные видео"
              items={[
                'Рекламные ролики и презентации',
                'Брендовый контент для YouTube',
                'Долгосрочное позиционирование'
              ]}
            />
          </div>

          {/* Value proposition - DARK bg with WHITE text */}
          <div className="p-12 rounded-3xl bg-gradient-to-r from-[--color-primary] to-purple-900 border-2 border-[--color-primary] shadow-[0_0_80px_rgba(128,0,128,0.4)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-[140px] opacity-5"></div>
            <div className="relative z-10 text-center">
              <Zap className="mx-auto mb-6 text-white" size={56} strokeWidth={1.5} />
              <h3 className="text-white mb-5">
                Не просто красиво —{' '}
                <span className="underline decoration-white decoration-2 underline-offset-4">эффективно</span>
              </h3>
              <p className="text-white text-opacity-90 text-lg max-w-3xl mx-auto leading-relaxed">
                Объединяем креативность с пониманием рекламных механик. Каждое видео создается с учетом особенностей платформы и целевой аудитории.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[--color-primary] to-transparent opacity-40"></div>

      {/* Process Section - LIGHT BACKGROUND with PURPLE highlights */}
      <section className="px-6 py-36 relative overflow-hidden" style={{ background: 'rgb(var(--color-bg-light))' }}>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-block mb-6">
              <span className="px-5 py-2.5 border-2 border-[--color-primary] border-opacity-60 rounded-full text-[--color-primary] text-sm font-bold uppercase tracking-wider">
                Процесс
              </span>
            </div>
            <h2 className="mb-8 text-[--color-text-light-bg] leading-tight">
              <span className="text-[--color-primary]">Полный цикл</span>{' '}
              от идеи до{' '}
              <span className="text-[--color-primary] relative inline-block">
                результата
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-[--color-primary] opacity-30"></span>
              </span>
            </h2>
            <p className="text-[--color-text-light-bg-secondary] max-w-2xl mx-auto text-lg leading-relaxed">
              5 шагов к эффективному видеоконтенту
            </p>
          </div>

          {/* Visual progress indicator - PURPLE */}
          <div className="mb-16 flex justify-center">
            <div className="flex items-center gap-3">
              {[1, 2, 3, 4, 5].map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-[--color-primary] shadow-[0_0_12px_rgba(128,0,128,0.7)]"></div>
                  {index < 4 && <div className="w-16 h-0.5 bg-gradient-to-r from-[--color-primary] to-purple-700"></div>}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            <ProcessStep
              number="01"
              title="Стратегия и концепция"
              description="Анализируем аудиторию и цели. Разрабатываем креативную концепцию."
              benefit="Точное попадание в ЦА"
            />
            <ProcessStep
              number="02"
              title="Сценарий и сториборд"
              description="Прописываем каждую секунду. Планируем визуальный ряд."
              benefit="Экономия времени на съёмках"
            />
            <ProcessStep
              number="03"
              title="Профессиональная съёмка"
              description="Современное оборудование и опытная команда."
              benefit="Премиум-качество контента"
            />
            <ProcessStep
              number="04"
              title="Монтаж, моушн и звук"
              description="Создаём динамику и нужную атмосферу."
              benefit="Удержание внимания"
            />
            <ProcessStep
              number="05"
              title="Адаптация для платформ"
              description="Оптимизируем под требования каждой соцсети."
              benefit="Максимальный охват"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[--color-primary] to-transparent opacity-40"></div>

      {/* Why ELI Section - DARK BACKGROUND with PURPLE highlights */}
      <section className="px-6 py-36 relative overflow-hidden" style={{ background: 'rgb(var(--color-bg-dark))' }}>
        {/* Background accents */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[--color-primary] rounded-full blur-[200px] opacity-15"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-block mb-6">
              <span className="px-5 py-2.5 border-2 border-[--color-primary] border-opacity-60 rounded-full text-[--color-primary] text-sm font-bold uppercase tracking-wider">
                Преимущества
              </span>
            </div>
            <h2 className="mb-8 text-[--color-text-dark-bg] leading-tight">
              Почему{' '}
              <span className="text-[--color-primary] relative inline-block">
                ELI studio
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-[--color-primary] opacity-40 blur-sm"></span>
              </span>
            </h2>
            <p className="text-[--color-text-dark-bg-secondary] max-w-2xl mx-auto text-lg leading-relaxed">
              Экспертиза в{' '}
              <span className="text-[--color-primary] font-medium">вертикалном видео</span> + фокус на{' '}
              <span className="text-[--color-primary] font-medium">результатах</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <FeatureCard
              icon={Smartphone}
              title="Вертикальное видео — наша специализация"
              description="Углубленная экспертиза в коротких форматах. Знаем нюансы создания контента для TikTok, Reels и Shorts."
            />
            <FeatureCard
              icon={Target}
              title="Понимание алгоритмов соцсетей"
              description="Создаём контент, который рекомендуют платформы. Знаем, как работают алгоритмы продвижения."
            />
            <FeatureCard
              icon={BarChart}
              title="Измеримые результаты"
              description="Фокус на метриках: охват, вовлечённость, конверсии. Оптимизируем каждую кампанию на основе данных."
            />
          </div>

          {/* Stats section - DARK bg with WHITE text and PURPLE highlights */}
          <div className="p-14 rounded-3xl bg-gradient-to-br from-[--color-primary] to-purple-900 border-2 border-[--color-primary] shadow-[0_0_100px_rgba(128,0,128,0.5)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[160px] opacity-5"></div>
            <div className="relative z-10">
              <div className="text-center mb-4">
                <h3 className="text-white mb-3">
                  Средние{' '}
                  <span className="underline decoration-white decoration-2 underline-offset-4">результаты</span>{' '}
                  клиентов
                </h3>
                <p className="text-white text-opacity-70">За первые 3 месяца работы</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12">
                <div className="text-center">
                  <div className="text-6xl font-black text-white mb-3">3-5x</div>
                  <div className="text-white text-opacity-80 uppercase tracking-wider text-sm font-medium">Рост охата</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-black text-white mb-3">2.5x</div>
                  <div className="text-white text-opacity-80 uppercase tracking-wider text-sm font-medium">Вовлечённость</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-black text-white mb-3">+40%</div>
                  <div className="text-white text-opacity-80 uppercase tracking-wider text-sm font-medium">Конверсии</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-black text-white mb-3">7-10</div>
                  <div className="text-white text-opacity-80 uppercase tracking-wider text-sm font-medium">Дней на проект</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[--color-primary] to-transparent opacity-40"></div>

      {/* Portfolio Section - LIGHT BACKGROUND with PURPLE highlights */}
      <section className="px-6 py-36 relative overflow-hidden" style={{ background: 'rgb(var(--color-bg-light))' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-block mb-6">
              <span className="px-5 py-2.5 border-2 border-[--color-primary] border-opacity-60 rounded-full text-[--color-primary] text-sm font-bold uppercase tracking-wider">
                Кейсы
              </span>
            </div>
            <h2 className="mb-8 text-[--color-text-light-bg] leading-tight">
              <span className="text-[--color-primary]">Наши работы</span> и{' '}
              <span className="text-[--color-primary] relative inline-block">
                результаты
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-[--color-primary] opacity-30"></span>
              </span>
            </h2>
            <p className="text-[--color-text-light-bg-secondary] max-w-2xl mx-auto text-lg leading-relaxed">
              Реальные проекты с измеримыми показателями
            </p>
          </div>

          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-1 w-16 bg-gradient-to-r from-[--color-primary] to-purple-900 rounded-full"></div>
              <h3 className="text-[--color-text-light-bg]">Вертикальные видео</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <PortfolioItem
                  image="https://images.unsplash.com/photo-1744234592204-37fda1a1abac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXJ0aWNhbCUyMHZpZGVvJTIwc21hcnRwaG9uZXxlbnwxfHx8fDE3NjY0MzMwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  title="TikTok кампания"
                  type="vertical"
                />
                <p className="mt-4 text-sm text-[--color-text-light-bg-muted] leading-relaxed">
                  Fashion бренд • <span className="text-[--color-primary] font-medium">5M просмотров</span> • 12% ER
                </p>
              </div>
              <div>
                <PortfolioItem
                  image="https://images.unsplash.com/flagged/photo-1594319622311-0b930abb17cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aWt0b2slMjBzb2NpYWwlMjBtZWRpYXxlbnwxfHx8fDE3NjYzNzQyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  title="Instagram Reels"
                  type="vertical"
                />
                <p className="mt-4 text-sm text-[--color-text-light-bg-muted] leading-relaxed">
                  Tech стартап • Вирусное видео • <span className="text-[--color-primary] font-medium">3M охват</span>
                </p>
              </div>
              <div>
                <PortfolioItem
                  image="https://images.unsplash.com/photo-1765383563504-63f95cab942c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzY2NDMzMDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  title="YouTube Shorts"
                  type="vertical"
                />
                <p className="mt-4 text-sm text-[--color-text-light-bg-muted] leading-relaxed">
                  Образование • 2M+ просмотров • <span className="text-[--color-primary] font-medium">+35% подписчиков</span>
                </p>
              </div>
              <div>
                <PortfolioItem
                  image="https://images.unsplash.com/photo-1612872750175-5b67ab0a6011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGZpbG1pbmclMjBjYW1lcmF8ZW58MXx8fHwxNzY2NDMzMDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  title="Продуктовый Reels"
                  type="vertical"
                />
                <p className="mt-4 text-sm text-[--color-text-light-bg-muted] leading-relaxed">
                  E-commerce • 8% CTR • <span className="text-[--color-primary] font-medium">+50% продаж</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-1 w-16 bg-gradient-to-r from-[--color-primary] to-purple-900 rounded-full"></div>
              <h3 className="text-[--color-text-light-bg]">Полноформатные видео</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <PortfolioItem
                  image="https://images.unsplash.com/photo-1730067698611-66d2af52be3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYWR2ZXJ0aXNpbmd8ZW58MXx8fHwxNzY2NDEwOTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  title="Рекламный ролик"
                  type="horizontal"
                />
                <p className="mt-4 text-sm text-[--color-text-light-bg-muted] leading-relaxed">
                  Премиум бренд • ТВ и digital • <span className="text-[--color-primary] font-medium">Узнаваемость +65%</span>
                </p>
              </div>
              <div>
                <PortfolioItem
                  image="https://images.unsplash.com/photo-1683090986234-15a7d0a8ac3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMHZpZGVvJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjY0MzMwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  title="Брендовое видео"
                  type="horizontal"
                />
                <p className="mt-4 text-sm text-[--color-text-light-bg-muted] leading-relaxed">
                  История компании • YouTube • <span className="text-[--color-primary] font-medium">500K+ просмотров</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[--color-primary] to-transparent opacity-40"></div>

      {/* Final CTA Section - DARK BACKGROUND with PURPLE highlights */}
      <section id="contact" className="px-6 py-40 relative overflow-hidden" style={{ background: 'rgb(var(--color-bg-dark))' }}>
        {/* Purple glow background - enhanced */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[700px] bg-[--color-primary] rounded-full blur-[240px] opacity-25"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-10">
            <div className="inline-block px-8 py-4 bg-[--color-bg-dark-alt] border-2 border-[--color-primary] border-opacity-60 rounded-full shadow-[0_0_40px_rgba(128,0,128,0.4)]">
              <span className="text-[--color-primary] font-bold tracking-wider uppercase text-sm">Начнём работу</span>
            </div>
          </div>

          <h2 className="mb-10 text-[--color-text-dark-bg] leading-tight">
            Запустим вашу первую кампанию и вырастим{' '}
            <span className="text-[--color-primary] relative inline-block">
              охват в 3-5 раз
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-[--color-primary] opacity-40 blur-sm"></span>
            </span>
          </h2>

          <p className="text-lg text-[--color-text-dark-bg-secondary] mb-14 max-w-2xl mx-auto leading-relaxed">
            Обсудим ваши цели, предложим стратегию и расчитаем стоимость. Первая консультация —{' '}
            <span className="text-[--color-primary] font-medium">бесплатно</span>.
          </p>

          {!showForm ? (
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
              <Button size="large" onClick={() => setShowForm(true)}>
                Получить расчёт
              </Button>
            </div>
          ) : (
            <div className="max-w-md mx-auto mb-12">
              {!isSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div 
                    className="p-8 rounded-2xl border-2"
                    style={{ 
                      background: 'rgb(var(--color-bg-dark-alt))',
                      borderColor: 'rgba(128, 0, 128, 0.4)',
                      boxShadow: '0 0 40px rgba(128, 0, 128, 0.2)'
                    }}
                  >
                    <h3 className="text-white text-xl font-bold mb-6 text-center">
                      Оставьте ваш номер т��лефона
                    </h3>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="w-full px-6 py-4 rounded-full border-2 outline-none transition-all duration-200 text-base text-center"
                      style={{
                        borderColor: 'rgba(128, 0, 128, 0.4)',
                        background: 'rgb(var(--color-bg-light))',
                        color: 'rgb(var(--color-text-light-bg))'
                      }}
                    />
                    <div className="flex gap-3 mt-6">
                      <button
                        type="submit"
                        className="flex-1 py-4 rounded-full bg-[#800080] text-white font-bold text-base transition-all duration-300 hover:bg-[#600060] hover:shadow-[0_0_30px_rgba(128,0,128,0.6)] hover:scale-[1.02]"
                      >
                        Отправить
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-6 py-4 rounded-full border-2 text-white font-medium transition-all duration-200 hover:bg-white hover:bg-opacity-10"
                        style={{ borderColor: 'rgba(128, 0, 128, 0.4)' }}
                      >
                        Отмена
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <div 
                  className="p-8 rounded-2xl border-2 text-center"
                  style={{ 
                    background: 'rgb(var(--color-bg-dark-alt))',
                    borderColor: 'rgba(128, 0, 128, 0.4)',
                    boxShadow: '0 0 40px rgba(128, 0, 128, 0.2)'
                  }}
                >
                  <div className="w-16 h-16 bg-[#800080] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    Спасибо!
                  </h3>
                  <p className="text-white text-opacity-80">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-8 text-sm text-[--color-text-dark-bg-muted]">
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[--color-primary] shadow-[0_0_8px_rgba(128,0,128,0.8)]"></div>
              <span>Ответ в течение 24 часов</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[--color-primary] shadow-[0_0_8px_rgba(128,0,128,0.8)]"></div>
              <span>Без предоплаты за консультацию</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[--color-primary] shadow-[0_0_8px_rgba(128,0,128,0.8)]"></div>
              <span>Прозрачное ценообразование</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - DARK */}
      <footer className="px-6 py-20 border-t border-[#800080] border-opacity-20 relative overflow-hidden" style={{ background: 'rgb(var(--color-bg-dark))' }}>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[--color-primary] rounded-full blur-[160px] opacity-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-[--color-primary] animate-pulse shadow-[0_0_20px_rgba(128,0,128,0.8)]"></div>
                <h3 className="text-[--color-text-dark-bg]">ELI studio</h3>
              </div>
              <p className="text-[--color-text-dark-bg-muted] text-sm mb-1">Видеопродакшн нового поколения</p>
              <p className="text-[--color-text-dark-bg-muted] text-xs opacity-70">
                Специализация:{' '}
                <span className="text-[--color-primary]">вертикальное видео</span>
              </p>
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-[--color-text-dark-bg-muted] hover:text-[--color-primary] transition-colors text-sm font-medium">TikTok</a>
              <a href="#" className="text-[--color-text-dark-bg-muted] hover:text-[--color-primary] transition-colors text-sm font-medium">Instagram</a>
              <a href="#" className="text-[--color-text-dark-bg-muted] hover:text-[--color-primary] transition-colors text-sm font-medium">YouTube</a>
              <a href="#" className="text-[--color-text-dark-bg-muted] hover:text-[--color-primary] transition-colors text-sm font-medium">Telegram</a>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-[--color-primary] to-transparent opacity-20 mb-10"></div>
          <div className="text-center text-[--color-text-dark-bg-muted] text-xs">
            © 2024 ELI studio. Все права защищены.
          </div>
        </div>
      </footer>

      {/* Chat Assistant */}
      <ChatAssistant />
    </div>
  );
}