import type { Preview } from '@storybook/vue3';
import { i18n } from '../src/boot/i18n';

// const decorator = (story, context) => {
//   const { locale } = context.globals;
//   i18n.global.locale.value = locale;
//   return story();
// };

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
