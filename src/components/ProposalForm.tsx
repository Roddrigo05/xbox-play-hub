import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const proposalSchema = z.object({
  nome: z.string().trim().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100, 'Nome muito longo'),
  email: z.string().trim().email('Email inválido').max(255, 'Email muito longo'),
  empresa: z.string().trim().min(2, 'Empresa deve ter pelo menos 2 caracteres').max(100, 'Nome da empresa muito longo'),
  produto_servico: z.enum(['Consola', 'Acessório', 'Game Pass', 'Cloud Gaming'], {
    required_error: 'Por favor selecione um produto/serviço'
  }),
  mensagem: z.string().trim().min(10, 'Mensagem deve ter pelo menos 10 caracteres').max(1000, 'Mensagem muito longa')
});

type ProposalFormData = z.infer<typeof proposalSchema>;

const ProposalForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<ProposalFormData>({
    resolver: zodResolver(proposalSchema)
  });

  const produto_servico = watch('produto_servico');

  const onSubmit = async (data: ProposalFormData) => {
    setIsSubmitting(true);
    
    try {
      // Webhook URL placeholder - to be replaced with Make.com URL
      const webhookUrl = 'https://hook.eu2.make.com/your-webhook-url-here';
      
      const payload = {
        ...data,
        timestamp: new Date().toISOString(),
        origem: 'Xbox Landing Page'
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast({
        title: "Pedido enviado com sucesso!",
        description: "Em breve receberá a proposta por email.",
        duration: 5000,
      });

      reset();
    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
      toast({
        title: "Erro ao enviar pedido",
        description: "Tente novamente mais tarde ou contacte-nos diretamente.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Nome */}
        <div className="space-y-2">
          <Label htmlFor="nome">Nome *</Label>
          <Input
            id="nome"
            {...register('nome')}
            placeholder="Seu nome completo"
            className={errors.nome ? 'border-destructive' : ''}
          />
          {errors.nome && (
            <p className="text-sm text-destructive">{errors.nome.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="seu.email@exemplo.com"
            className={errors.email ? 'border-destructive' : ''}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        {/* Empresa */}
        <div className="space-y-2">
          <Label htmlFor="empresa">Empresa *</Label>
          <Input
            id="empresa"
            {...register('empresa')}
            placeholder="Nome da sua empresa"
            className={errors.empresa ? 'border-destructive' : ''}
          />
          {errors.empresa && (
            <p className="text-sm text-destructive">{errors.empresa.message}</p>
          )}
        </div>

        {/* Produto/Serviço */}
        <div className="space-y-2">
          <Label htmlFor="produto_servico">Produto/Serviço desejado *</Label>
          <Select 
            value={produto_servico} 
            onValueChange={(value) => setValue('produto_servico', value as any)}
          >
            <SelectTrigger className={errors.produto_servico ? 'border-destructive' : ''}>
              <SelectValue placeholder="Selecione uma opção" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Consola">Consola</SelectItem>
              <SelectItem value="Acessório">Acessório</SelectItem>
              <SelectItem value="Game Pass">Game Pass</SelectItem>
              <SelectItem value="Cloud Gaming">Cloud Gaming</SelectItem>
            </SelectContent>
          </Select>
          {errors.produto_servico && (
            <p className="text-sm text-destructive">{errors.produto_servico.message}</p>
          )}
        </div>

        {/* Mensagem */}
        <div className="space-y-2">
          <Label htmlFor="mensagem">Mensagem detalhada *</Label>
          <Textarea
            id="mensagem"
            {...register('mensagem')}
            placeholder="Descreva suas necessidades e requisitos específicos..."
            className={`min-h-[120px] ${errors.mensagem ? 'border-destructive' : ''}`}
          />
          {errors.mensagem && (
            <p className="text-sm text-destructive">{errors.mensagem.message}</p>
          )}
        </div>

        {/* Botão de envio */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#107c10] hover:bg-[#0e6b0e] text-white font-semibold py-3 transition-colors"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            'Enviar Pedido de Proposta'
          )}
        </Button>
      </form>
    </div>
  );
};

export default ProposalForm;