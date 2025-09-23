import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Olá! Sou o assistente Xbox. Como posso ajudar-te hoje?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessages = [
      ...messages,
      { type: 'user', text: inputValue },
      { type: 'bot', text: 'Obrigado pela sua mensagem! Este é um chat demo. Para assistência real, contacte o nosso suporte.' }
    ];
    
    setMessages(newMessages);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-primary shadow-glow hover:shadow-hover transition-all duration-300 animate-float z-50 ${
          isOpen ? 'hidden' : 'flex'
        }`}
        size="sm"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>

      {/* Chat Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-6">
          <div className="animate-fade-in">
            <Card className="w-96 h-[500px] shadow-hover bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-primary rounded-t-lg">
                <CardTitle className="text-lg font-semibold text-white">
                  Assistente Xbox
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              
              <CardContent className="flex flex-col h-full p-0">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-primary text-white'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-border">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Escreve a tua pergunta..."
                      className="flex-1 px-3 py-2 text-sm bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                    <Button
                      onClick={handleSendMessage}
                      size="sm"
                      className="bg-primary hover:bg-primary-hover transition-colors"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Este é um chat demo. Para suporte real, contacte-nos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;