import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Sparkles",
      title: "Генерация контента",
      description: "Создавайте уникальные тексты, изображения и идеи за секунды с помощью продвинутых нейросетей"
    },
    {
      icon: "Zap",
      title: "Молниеносная скорость",
      description: "Обработка запросов в реальном времени без задержек и долгого ожидания ответа"
    },
    {
      icon: "Shield",
      title: "Безопасность данных",
      description: "Все данные защищены современными протоколами шифрования и не передаются третьим лицам"
    },
    {
      icon: "Brain",
      title: "Умное обучение",
      description: "ИИ анализирует ваш стиль работы и адаптируется под личные предпочтения"
    },
    {
      icon: "Target",
      title: "Точность результатов",
      description: "Высокая точность генерации благодаря обучению на миллионах примеров"
    },
    {
      icon: "Workflow",
      title: "Интеграция API",
      description: "Легко подключайте наш ИИ к вашим приложениям через простой REST API"
    }
  ];

  const team = [
    {
      role: "CEO & Основатель",
      name: "Алексей Смирнов",
      description: "15 лет в разработке ИИ"
    },
    {
      role: "CTO",
      name: "Мария Петрова",
      description: "Эксперт в ML и Deep Learning"
    },
    {
      role: "Head of AI",
      name: "Дмитрий Волков",
      description: "PhD в Computer Science"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 animate-glow" />
        
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-float" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '4s' }} />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <div className="flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur-xl rounded-full border border-primary/20">
                <Icon name="Sparkles" className="text-primary" size={20} />
                <span className="text-sm font-medium bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Новое поколение искусственного интеллекта
                </span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Будущее ИИ
              </span>
              <br />
              <span className="text-foreground">уже здесь</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Революционная платформа искусственного интеллекта, которая трансформирует ваши идеи в реальность
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 shadow-2xl shadow-primary/50">
                <Icon name="Rocket" className="mr-2" size={20} />
                Начать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-card/50 backdrop-blur-xl transition-all hover:scale-105">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Check" className="text-primary" size={16} />
                <span>Без кредитной карты</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="text-primary" size={16} />
                <span>14 дней бесплатно</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="text-primary" size={16} />
                <span>Отмена в любой момент</span>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-4 py-32 bg-gradient-to-b from-transparent to-muted/50">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="inline-block px-6 py-2 bg-primary/10 backdrop-blur-xl rounded-full border border-primary/20">
                <span className="text-sm font-semibold text-primary">ВОЗМОЖНОСТИ</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Сверхспособности
                </span>
                <br />
                <span className="text-foreground">для вашего бизнеса</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Мощные инструменты ИИ, которые выведут вашу продуктивность на новый уровень
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="group relative overflow-hidden bg-card/50 backdrop-blur-xl border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="relative p-8 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/50 group-hover:scale-110 transition-transform">
                      <Icon name={feature.icon} className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="inline-block px-6 py-2 bg-accent/10 backdrop-blur-xl rounded-full border border-accent/20">
                <span className="text-sm font-semibold text-accent">О НАС</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black">
                <span className="text-foreground">Команда</span>
                <br />
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  мирового уровня
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Мы — группа энтузиастов ИИ, объединенных миссией сделать передовые технологии доступными каждому
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card 
                  key={index}
                  className="group relative overflow-hidden bg-card/50 backdrop-blur-xl border-accent/10 hover:border-accent/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="relative p-8 space-y-4 text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-4xl font-black text-white shadow-lg shadow-accent/50 group-hover:scale-110 transition-transform">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                        {member.role}
                      </p>
                      <h3 className="text-2xl font-bold text-foreground mt-2">
                        {member.name}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent p-[2px] animate-fade-in">
              <div className="bg-card/95 backdrop-blur-xl rounded-lg p-12 text-center space-y-6">
                <h3 className="text-4xl font-black text-foreground">
                  Готовы начать?
                </h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Присоединяйтесь к тысячам компаний, которые уже используют наш ИИ для роста бизнеса
                </p>
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 shadow-2xl shadow-primary/50">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Создать аккаунт
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <footer className="relative px-4 py-12 border-t border-border/50 bg-card/30 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={16} />
              </div>
              <span className="text-xl font-bold">AI Platform</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 AI Platform. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
