import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import './App.css';
import { dependenciesLocator } from './DependenciesLocator';
import { usePlocState } from './useBlocState';

const App = () => {

  const bloc=  dependenciesLocator.provideFormController()
  const state = usePlocState(bloc)
  useEffect(() => {
    createChat({
      webhookUrl: 'https://n8n.luvserver.com/webhook/2594d16b-5b2e-4943-88ae-53c0fb27b935',
      webhookConfig: {
        method: 'POST',
        headers: {}
      },
      target: '#n8n-chat',
      mode: 'fullscreen',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      metadata: {},
      showWelcomeScreen: true,
      defaultLanguage: 'en',
      allowFileUploads: true,
      initialMessages: [
        'Grupo 11',
        'Automatizacion'
      ],
      i18n: {
        en: {
          title: 'Grupo 11',
          subtitle: "Automatizacion",
          footer: '',
          getStarted: 'Agente IA',
          inputPlaceholder: '¿En que puedo ayudarte?',
          closeButtonTooltip:''
        },
      },
    });
    bloc.changeTest()
  }, []);

  return <div id="n8n-chat" style={{ width: '100%', height: '500px' }}>
    {JSON.stringify(state)}
  </div>; // Este es el target embebido
};

export default App;
