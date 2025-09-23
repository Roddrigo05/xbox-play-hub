import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown, Search, ShoppingCart, User, X } from 'lucide-react';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <X className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">Xbox</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
                  Jogos <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem onClick={() => scrollToSection('jogos-promocao')}>
                  Jogos PC
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('jogos-promocao')}>
                  Jogos Consola
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('jogos-promocao')}>
                  Xbox em Dispositivos Móveis
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('jogos-promocao')}>
                  Xbox em Óculos VR
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" onClick={() => scrollToSection('consolas')} className="text-foreground hover:text-primary transition-colors">
              Consolas
            </Button>

            <Button variant="ghost" onClick={() => scrollToSection('game-pass')} className="text-foreground hover:text-primary transition-colors">
              Game Pass
            </Button>

            <Button variant="ghost" onClick={() => scrollToSection('acessorios')} className="text-foreground hover:text-primary transition-colors">
              Acessórios
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
                  Comprar <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem onClick={() => scrollToSection('jogos-promocao')}>
                  Comprar Jogos
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('game-pass')}>
                  Game Pass
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('consolas')}>
                  Consolas
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('acessorios')}>
                  Acessórios
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('jogos-promocao')}>
                  Promoções
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
              Comunidade
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
                  Mais <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>
                  Suporte
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Normas da Comunidade
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Contactar Microsoft
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:bg-secondary transition-colors"
            >
              <Search className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" size="sm" className="hover:bg-secondary transition-colors">
              <ShoppingCart className="h-4 w-4" />
            </Button>

            <Button size="sm" className="bg-primary hover:bg-primary-hover transition-colors">
              Login
            </Button>

            <Button variant="outline" size="sm" className="hover:bg-secondary transition-colors">
              Sign Up
            </Button>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="mt-4 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Pesquisar jogos, consolas, acessórios..."
                className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;