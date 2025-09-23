import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface GameCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
}

const GameCard = ({ image, title, description, price, originalPrice }: GameCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-hover hover:scale-105 bg-gradient-card border-border">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {originalPrice && (
          <div className="absolute top-2 right-2 bg-destructive text-white px-2 py-1 rounded-lg text-sm font-semibold">
            -25%
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
            )}
          </div>
          
          <Button 
            size="sm" 
            className="bg-primary hover:bg-primary-hover transition-colors"
          >
            Comprar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;