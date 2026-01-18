import { MessageCircle, X, Send, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import telegramIcon from 'figma:asset/08624cbb5d5624a8744267ddb656c970f15ba109.png';

type ViewType = 'chat' | 'telegram';

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [currentView, setCurrentView] = useState<ViewType>('chat');
  const [selectedTab, setSelectedTab] = useState<'write' | 'telegram'>('write');

  useEffect(() => {
    const handleScroll = () => {
      // Show chat assistant after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
      // Here you would typically send the message to your backend
    }
  };

  const handleTabChange = (tab: 'write' | 'telegram') => {
    setSelectedTab(tab);
    if (tab === 'telegram') {
      setCurrentView('telegram');
    } else {
      setCurrentView('chat');
    }
  };

  const handleBack = () => {
    setCurrentView('chat');
    setSelectedTab('write');
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-[#800080] text-white shadow-[0_4px_20px_rgba(128,0,128,0.4)] hover:shadow-[0_6px_30px_rgba(128,0,128,0.6)] transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
        style={{ transition: 'transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease' }}
        aria-label="Открыть чат"
      >
        {isOpen ? (
          <X size={24} strokeWidth={2.5} />
        ) : (
          <MessageCircle size={24} strokeWidth={2.5} />
        )}
        {/* Pulse indicator */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-28 right-8 z-50 w-96 max-w-[calc(100vw-4rem)] transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ 
          background: 'rgb(var(--color-bg-light-alt))',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          border: '2px solid #800080',
          transition: 'transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease'
        }}
      >
        {currentView === 'chat' ? (
          <>
            {/* Header */}
            <div 
              className="p-6 border-b"
              style={{ 
                borderColor: 'rgba(128, 0, 128, 0.2)',
                background: 'linear-gradient(135deg, #800080 0%, #600060 100%)',
                borderRadius: '14px 14px 0 0'
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Онлайн-консультант</h4>
                  <p className="text-white text-opacity-90 text-xs">Обычно отвечаем в течение 5 минут</p>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 bg-black bg-opacity-20 rounded-full p-1">
                <button
                  onClick={() => handleTabChange('write')}
                  className={`flex-1 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    selectedTab === 'write' 
                      ? 'bg-white bg-opacity-20 text-white shadow-lg' 
                      : 'text-white text-opacity-70 hover:text-opacity-100'
                  }`}
                >
                  <MessageCircle size={16} strokeWidth={2} />
                  Чат
                </button>
                <button
                  onClick={() => handleTabChange('telegram')}
                  className={`flex-1 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    selectedTab === 'telegram' 
                      ? 'bg-white bg-opacity-20 text-white shadow-lg' 
                      : 'text-white text-opacity-70 hover:text-opacity-100'
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                  </svg>
                  Telegram
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="p-6 h-80 overflow-y-auto">
              {/* Welcome message */}
              <div className="mb-4">
                <div 
                  className="inline-block p-4 rounded-2xl rounded-tl-none max-w-[80%]"
                  style={{ background: 'rgb(var(--color-bg-light))' }}
                >
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgb(var(--color-text-light-bg))' }}
                  >
                    Здравствуйте! 👋 Я помогу вам с любыми вопросами о наших услугах видеопродакшна.
                  </p>
                  <p 
                    className="text-xs mt-2"
                    style={{ color: 'rgb(var(--color-text-light-bg-muted))' }}
                  >
                    Как мы можем помочь вам сегодня?
                  </p>
                </div>
              </div>

              {/* Quick action buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => setMessage('Расскажите о вертикальных видео')}
                  className="w-full text-left p-3 rounded-xl border-2 transition-all duration-200 hover:scale-[1.02] text-sm"
                  style={{
                    borderColor: 'rgba(128, 0, 128, 0.3)',
                    color: 'rgb(var(--color-text-light-bg))',
                    background: 'rgb(var(--color-bg-light))'
                  }}
                >
                  📱 Расскажите о вертикальных видео
                </button>
                <button
                  onClick={() => setMessage('Какова стоимость услуг?')}
                  className="w-full text-left p-3 rounded-xl border-2 transition-all duration-200 hover:scale-[1.02] text-sm"
                  style={{
                    borderColor: 'rgba(128, 0, 128, 0.3)',
                    color: 'rgb(var(--color-text-light-bg))',
                    background: 'rgb(var(--color-bg-light))'
                  }}
                >
                  💰 Какова стоимость услуг?
                </button>
                <button
                  onClick={() => setMessage('Хочу обсудить проект')}
                  className="w-full text-left p-3 rounded-xl border-2 transition-all duration-200 hover:scale-[1.02] text-sm"
                  style={{
                    borderColor: 'rgba(128, 0, 128, 0.3)',
                    color: 'rgb(var(--color-text-light-bg))',
                    background: 'rgb(var(--color-bg-light))'
                  }}
                >
                  🚀 Хочу обсудить проект
                </button>
              </div>
            </div>

            {/* Input */}
            <div 
              className="p-4 border-t"
              style={{ borderColor: 'rgba(128, 0, 128, 0.2)' }}
            >
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Напишите сообщение..."
                  className="flex-1 px-4 py-3 rounded-full border-2 outline-none transition-all duration-200 text-sm"
                  style={{
                    borderColor: 'rgba(128, 0, 128, 0.3)',
                    background: 'rgb(var(--color-bg-light))',
                    color: 'rgb(var(--color-text-light-bg))'
                  }}
                />
                <button
                  type="submit"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: '#800080',
                    boxShadow: '0 4px 12px rgba(128,0,128,0.3)'
                  }}
                  aria-label="Отправить сообщение"
                >
                  <Send size={18} className="text-white" strokeWidth={2.5} />
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            {/* Telegram View Header */}
            <div 
              className="p-6 border-b relative"
              style={{ 
                borderColor: 'rgba(128, 0, 128, 0.2)',
                background: 'linear-gradient(135deg, #800080 0%, #600060 100%)',
                borderRadius: '14px 14px 0 0'
              }}
            >
              <button
                onClick={handleBack}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition-all duration-200"
                aria-label="Назад"
              >
                <ArrowLeft size={20} className="text-white" strokeWidth={2} />
              </button>
              <h4 className="text-white font-bold text-lg text-center">Telegram</h4>
            </div>

            {/* Telegram View Content */}
            <div className="p-6">
              <h3 
                className="text-xl font-bold mb-6"
                style={{ color: 'rgb(var(--color-text-light-bg))' }}
              >
                Написать нам в Telegram
              </h3>

              {/* Telegram Button */}
              <a
                href="https://t.me/elistudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block mb-6"
              >
                <button
                  className="w-full py-4 rounded-full bg-[#800080] text-white font-bold text-base transition-all duration-300 hover:bg-[#600060] hover:shadow-[0_0_30px_rgba(128,0,128,0.6)] hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                  </svg>
                  Перейти в Telegram
                </button>
              </a>

              {/* QR Code Section */}
              <div 
                className="p-6 rounded-2xl border-2"
                style={{ 
                  borderColor: 'rgba(128, 0, 128, 0.2)',
                  background: 'rgb(var(--color-bg-dark))'
                }}
              >
                <p 
                  className="text-sm mb-4 text-center leading-relaxed"
                  style={{ color: 'rgb(var(--color-text-dark-bg-secondary))' }}
                >
                  Или отсканируйте этот QR-код, чтобы написать нам в Telegram с телефона:
                </p>
                <div className="bg-white p-4 rounded-xl flex items-center justify-center">
                  {/* QR Code Placeholder - Replace with actual QR code */}
                  <div className="w-48 h-48 bg-white flex items-center justify-center">
                    <svg width="192" height="192" viewBox="0 0 192 192" fill="none">
                      {/* Simple QR code pattern */}
                      <rect width="192" height="192" fill="white"/>
                      <rect x="8" y="8" width="48" height="48" fill="black"/>
                      <rect x="136" y="8" width="48" height="48" fill="black"/>
                      <rect x="8" y="136" width="48" height="48" fill="black"/>
                      <rect x="16" y="16" width="32" height="32" fill="white"/>
                      <rect x="144" y="16" width="32" height="32" fill="white"/>
                      <rect x="16" y="144" width="32" height="32" fill="white"/>
                      <rect x="24" y="24" width="16" height="16" fill="black"/>
                      <rect x="152" y="24" width="16" height="16" fill="black"/>
                      <rect x="24" y="152" width="16" height="16" fill="black"/>
                      <rect x="64" y="8" width="8" height="8" fill="black"/>
                      <rect x="80" y="8" width="8" height="8" fill="black"/>
                      <rect x="96" y="8" width="8" height="8" fill="black"/>
                      <rect x="112" y="8" width="8" height="8" fill="black"/>
                      <rect x="8" y="64" width="8" height="8" fill="black"/>
                      <rect x="8" y="80" width="8" height="8" fill="black"/>
                      <rect x="8" y="96" width="8" height="8" fill="black"/>
                      <rect x="8" y="112" width="8" height="8" fill="black"/>
                      <rect x="176" y="64" width="8" height="8" fill="black"/>
                      <rect x="176" y="80" width="8" height="8" fill="black"/>
                      <rect x="176" y="96" width="8" height="8" fill="black"/>
                      <rect x="176" y="112" width="8" height="8" fill="black"/>
                      <rect x="64" y="176" width="8" height="8" fill="black"/>
                      <rect x="80" y="176" width="8" height="8" fill="black"/>
                      <rect x="96" y="176" width="8" height="8" fill="black"/>
                      <rect x="112" y="176" width="8" height="8" fill="black"/>
                      <rect x="64" y="64" width="8" height="8" fill="black"/>
                      <rect x="72" y="72" width="8" height="8" fill="black"/>
                      <rect x="80" y="64" width="8" height="8" fill="black"/>
                      <rect x="88" y="88" width="16" height="16" fill="black"/>
                      <rect x="112" y="64" width="8" height="8" fill="black"/>
                      <rect x="120" y="72" width="8" height="8" fill="black"/>
                      <rect x="64" y="112" width="8" height="8" fill="black"/>
                      <rect x="72" y="120" width="8" height="8" fill="black"/>
                      <rect x="112" y="112" width="8" height="8" fill="black"/>
                      <rect x="120" y="120" width="8" height="8" fill="black"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}