import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css'; // Estilos do Quasar
import '@quasar/extras/material-icons/material-icons.css'; // Ícones (se necessário)
import '../src/css/app.scss';
import '../src/css/quasar.variables.scss';

// const decorator = (story, context) => {
//   const { locale } = context.globals;
//   i18n.global.locale.value = locale;
//   return story();
// };

// Registre o Quasar no contexto do Storybook
setup((app) => {
  app.use(Quasar, {
    // Configure aqui plugins ou outras opções globais do Quasar
    config: {
      brand: {
        primary: '#1976d2', // Exemplo de configuração de tema
        secondary: '#26a69a',
      },
    },
  });
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en-US', title: 'English' },
          { value: 'pt-BR', title: 'Portuguese' },
        ],
        showName: true,
      },
    },
  },
  // decorators: [decorator],
};

export default preview;
