import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css'; // Estilos do Quasar
import '@quasar/extras/material-icons/material-icons.css'; // Ícones (se necessário)
import '../src/css/app.scss';
import '../src/css/quasar.variables.scss';
import { i18n } from '../src/boot/i18n';

// Registre o Quasar no contexto do Storybook
setup((app) => {
  app.use(i18n);
  app.use(Quasar, {});
});

const globalTypes = {
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
};

const decorator = (story, context) => {
  const { locale } = context.globals;
  i18n.global.locale.value = locale;
  return story();
};

const preview: Preview = {
  globalTypes,
  decorators: [decorator],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
