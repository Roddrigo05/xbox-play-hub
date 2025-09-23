import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import ChatBot from '@/components/ChatBot';
import GameCard from '@/components/GameCard';
import { 
  Gamepad2, 
  Zap, 
  Cloud, 
  Monitor, 
  Headphones, 
  Glasses,
  Gift,
  ArrowRight,
  Star,
  Users,
  Globe,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Mail,
  Music,
  X
} from 'lucide-react';

// Import images
import xboxHero from '@/assets/xbox-hero.jpg';
import xboxSeriesX from '@/assets/xbox-series-x.jpg';
import xboxSeriesS from '@/assets/xbox-series-s.jpg';
import xboxController from '@/assets/xbox-controller.jpg';
import xboxVR from '@/assets/xbox-vr.jpg';
import gameFantasy from '@/assets/game-fantasy.jpg';
import gameRacing from '@/assets/game-racing.jpg';
import gameShooter from '@/assets/game-shooter.jpg';
import gameHorror from '@/assets/game-horror.jpg';
import gameSports from '@/assets/game-sports.jpg';
import xboxHeadset from '@/assets/xbox-headset.jpg';
import xboxSeriesZ from '@/assets/xbox-series-z.jpg';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent z-10" />
        <div 
          className="h-[600px] bg-cover bg-center"
          style={{ backgroundImage: `url(${xboxHero})` }}
        />
        
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent animate-fade-in">
                Poder. Velocidade. Desempenho.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
                Descobra o futuro dos jogos com a nova geração Xbox. Jogos épicos, gráficos incríveis e uma experiência única te esperam.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  onClick={() => scrollToSection('consolas')}
                >
                  Comprar Xbox
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  onClick={() => scrollToSection('game-pass')}
                >
                  Explorar Game Pass
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Pass Section */}
      <section id="game-pass" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Xbox Game Pass</h2>
            <p className="text-xl text-muted-foreground">Centenas de jogos de alta qualidade para PC e consola</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="group transition-all duration-300 hover:shadow-hover hover:scale-105 bg-gradient-card border-border hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary rounded-lg">
                    <Gamepad2 className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Game Pass Ultimate</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Acesso completo à biblioteca de jogos Xbox, incluindo novos lançamentos no primeiro dia.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">€12.99/mês</span>
                  <Button className="bg-primary hover:bg-primary-hover transition-all duration-300 hover:shadow-glow hover-lift">
                    Subscrever
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-300 hover:shadow-hover hover:scale-105 bg-gradient-card border-border hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary rounded-lg">
                    <Monitor className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Game Pass para PC</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Biblioteca completa de jogos disponível apenas para PC, com centenas de títulos.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">€9.99/mês</span>
                  <Button className="bg-primary hover:bg-primary-hover transition-all duration-300 hover:shadow-glow hover-lift">
                    Subscrever
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-300 hover:shadow-hover hover:scale-105 bg-gradient-card border-border hover-lift">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Zap className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-xl">Game Pass Core</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Acesso básico a uma seleção de jogos populares com multijogador online incluído.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">€6.99/mês</span>
                  <Button className="bg-primary hover:bg-primary-hover transition-all duration-300 hover:shadow-glow hover-lift">
                    Subscrever
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center p-6 bg-gradient-card border-border transition-all duration-300 hover:shadow-hover">
              <Cloud className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cloud Gaming</h3>
              <p className="text-muted-foreground">Joga no dispositivo que já tens</p>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-card border-border transition-all duration-300 hover:shadow-hover">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Novos Lançamentos</h3>
              <p className="text-muted-foreground">Jogos no primeiro dia</p>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-card border-border transition-all duration-300 hover:shadow-hover">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Multijugador</h3>
              <p className="text-muted-foreground">Joga com amigos</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Consolas Section */}
      <section id="consolas" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Consolas Xbox</h2>
            <p className="text-xl text-muted-foreground">Escolhe a consola perfeita para ti</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="group transition-all duration-300 hover:shadow-hover hover:scale-105 bg-gradient-card border-border overflow-hidden hover-lift">
              <div className="relative">
                <img 
                  src={xboxSeriesX} 
                  alt="Xbox Series X" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-white">
                  Mais Potente
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Xbox Series X</h3>
                <p className="text-muted-foreground mb-4">
                  A consola Xbox mais potente de sempre. Jogos em 4K, até 120 FPS, e carregamentos ultra-rápidos.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">€499</span>
                  <Button className="bg-primary hover:bg-primary-hover transition-all duration-300 hover:shadow-glow hover-lift">
                    Comprar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-300 hover:shadow-hover hover:scale-105 bg-gradient-card border-border overflow-hidden hover-lift">
              <div className="relative">
                <img 
                  src={xboxSeriesS} 
                  alt="Xbox Series S" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-black">
                  Melhor Valor
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Xbox Series S</h3>
                <p className="text-muted-foreground mb-4">
                  Consola compacta e acessível. Jogos digitais em alta definição com performance de próxima geração.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">€299</span>
                  <Button className="bg-primary hover:bg-primary-hover transition-all duration-300 hover:shadow-glow hover-lift">
                    Comprar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-300 hover:shadow-hover hover:scale-105 bg-gradient-card border-border overflow-hidden hover-lift">
              <div className="relative">
                <img 
                  src={xboxSeriesZ} 
                  alt="Xbox Series Z" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-secondary text-white">
                  Compacta
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Xbox Series Z</h3>
                <p className="text-muted-foreground mb-4">
                  Design ultra-compacto e portátil. Performance otimizada para jogos em movimento.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">€199</span>
                  <Button className="bg-primary hover:bg-primary-hover transition-all duration-300 hover:shadow-glow hover-lift">
                    Comprar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Novos Lançamentos */}
      <section id="novos-lancamentos" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Novos Lançamentos</h2>
            <p className="text-xl text-muted-foreground">Os jogos mais recentes disponíveis agora</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Card className="group transition-all duration-300 hover:shadow-hover hover:scale-105 bg-gradient-card border-border overflow-hidden hover-lift">
              <div className="relative">
                <img 
                  src={gameHorror} 
                  alt="Novo Jogo 1" 
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Badge className="absolute top-2 right-2 bg-accent text-black text-xs">
                  Novo
                </Badge>
              </div>
              <CardContent className="p-3">
                <h4 className="font-semibold text-sm mb-1">Sombras do Medo</h4>
                <p className="text-xs text-muted-foreground mb-2">Survival Horror</p>
                <span className="text-sm font-bold text-primary">€59.99</span>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-300 hover:shadow-hover hover:scale-105 bg-gradient-card border-border overflow-hidden hover-lift">
              <div className="relative">
                <img 
                  src={gameRacing} 
                  alt="Novo Jogo 2" 
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Badge className="absolute top-2 right-2 bg-accent text-black text-xs">
                  Novo
                </Badge>
              </div>
              <CardContent className="p-3">
                <h4 className="font-semibold text-sm mb-1">Turbo Rush</h4>
                <p className="text-xs text-muted-foreground mb-2">Corridas futuristas</p>
                <span className="text-sm font-bold text-primary">€49.99</span>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-300 hover:shadow-hover hover:scale-105 bg-gradient-card border-border overflow-hidden hover-lift">
              <div className="relative">
                <img 
                  src={gameShooter} 
                  alt="Novo Jogo 3" 
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Badge className="absolute top-2 right-2 bg-accent text-black text-xs">
                  Novo
                </Badge>
              </div>
              <CardContent className="p-3">
                <h4 className="font-semibold text-sm mb-1">Combat Zone</h4>
                <p className="text-xs text-muted-foreground mb-2">Ação militar intensa</p>
                <span className="text-sm font-bold text-primary">€54.99</span>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-300 hover:shadow-hover hover:scale-105 bg-gradient-card border-border overflow-hidden hover-lift">
              <div className="relative">
                <img 
                  src={gameSports} 
                  alt="Novo Jogo 4" 
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Badge className="absolute top-2 right-2 bg-accent text-black text-xs">
                  Novo
                </Badge>
              </div>
              <CardContent className="p-3">
                <h4 className="font-semibold text-sm mb-1">Champions League</h4>
                <p className="text-xs text-muted-foreground mb-2">Futebol competitivo</p>
                <span className="text-sm font-bold text-primary">€44.99</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Jogos em Promoção */}
      <section id="jogos-promocao" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Promoções</h2>
              <p className="text-xl text-muted-foreground">Descobre os melhores jogos com preços especiais</p>
            </div>
            
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Gift className="mr-2 h-4 w-4" />
              Resgatar Código
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <GameCard
              image={gameFantasy}
              title="Aventura Épica"
              description="Embarca numa jornada fantástica através de mundos mágicos cheios de perigos e tesouros."
              price="€39.99"
              originalPrice="€59.99"
            />
            
            <GameCard
              image={gameRacing}
              title="Velocidade Extrema"
              description="Corridas futuristas nas ruas de cidades cyberpunk com carros personalizáveis."
              price="€29.99"
              originalPrice="€49.99"
            />
            
            <GameCard
              image={gameShooter}
              title="Operação Especial"
              description="Ação militar intensa com campanhas emocionantes e multiplayer competitivo."
              price="€44.99"
              originalPrice="€69.99"
            />
          </div>
        </div>
      </section>

      {/* Acessórios */}
      <section id="acessorios" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Acessórios Xbox</h2>
            <p className="text-xl text-muted-foreground">Melhora a tua experiência de jogo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group transition-all duration-300 hover:shadow-hover hover:scale-105 bg-gradient-card border-border overflow-hidden">
              <div className="relative">
                <img 
                  src={xboxController} 
                  alt="Comando Xbox" 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Comando Wireless</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Comando sem fios de alta precisão com feedback háptico avançado.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">€59.99</span>
                  <Button size="sm" className="bg-primary hover:bg-primary-hover transition-colors">
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-300 hover:shadow-hover hover:scale-105 bg-gradient-card border-border overflow-hidden hover-lift">
              <div className="relative">
                <img 
                  src={xboxHeadset} 
                  alt="Headset Wireless Xbox" 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Headset Wireless</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Áudio envolvente e microfone cristalino para comunicação perfeita.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">€99.99</span>
                  <Button size="sm" className="bg-primary hover:bg-primary-hover transition-all duration-300 hover:shadow-glow hover-lift">
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-300 hover:shadow-hover hover:scale-105 bg-gradient-card border-border overflow-hidden">
              <div className="relative">
                <img 
                  src={xboxVR} 
                  alt="Óculos VR Xbox" 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <Badge className="absolute top-2 right-2 bg-accent text-black">
                  Novo
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">Óculos VR</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Realidade virtual imersiva com resolução 4K e tracking preciso.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">€399.99</span>
                  <Button size="sm" className="bg-primary hover:bg-primary-hover transition-colors">
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Procurar</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Xbox consolas</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Jogos Xbox</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Xbox Game Pass</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Acessórios Xbox</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Suporte para Xbox</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Feedback</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Normas da Comunidade</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Aviso de Fotossensibilidade</a></li>
              </ul>
              
              <h4 className="text-md font-semibold mb-3 mt-6">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="X (Twitter)">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="TikTok">
                  <Music className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" title="Gmail">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Microsoft Store</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Conta Microsoft</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Suporte da Microsoft Store</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Devoluções</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Acompanhamento de encomendas</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Para Programadores</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Jogos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Português (Portugal)</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
              <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-0">
                <span>As suas Escolhas de Privacidade</span>
                <span>Privacidade da Saúde do Consumidor</span>
                <span>Contactar a Microsoft</span>
                <span>Privacidade e Cookies</span>
                <span>Termos de utilização</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>© Microsoft 2025</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
};

export default Index;