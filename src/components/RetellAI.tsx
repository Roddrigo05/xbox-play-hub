import { useEffect } from 'react';

const RetellAI = () => {
  useEffect(() => {
    // Check if script is already loaded
    if (document.getElementById('retell-widget')) return;

    const script = document.createElement('script');
    script.id = 'retell-widget';
    script.src = 'https://dashboard.retellai.com/retell-widget.js';
    script.type = 'module';
    script.setAttribute('data-public-key', 'public_key_c650a31060844169ecda9');
    script.setAttribute('data-agent-id', 'agent_11c12bf5ff6e09ff771fe1b99d');
    script.setAttribute('data-bot-name', 'Samantha');
    script.setAttribute('data-title', 'Assistente Xbox');
    script.setAttribute('data-color', '#0D7E1B');
    script.setAttribute('data-popup-message', 'Olá! Sou a Samantha, assistente Xbox. Como posso ajudar-te?');
    script.setAttribute('data-show-ai-popup', 'true');
    script.setAttribute('data-show-ai-popup-time', '5');
    script.setAttribute('data-auto-open', 'false');

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.getElementById('retell-widget');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default RetellAI;