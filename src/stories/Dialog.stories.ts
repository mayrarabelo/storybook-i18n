import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';

import DialogSystem from 'src/components/DialogSystem.vue';

export default {
  title: 'Components/DialogSystem',
  component: DialogSystem,
  args: {
    title: 'Default Title',
    upper_title: 'Default Upper Title',
    closeBtn: true,
    icon: { control: 'text' },
    iconColor: '#1AA97E',
    paragraphs: ['Default paragraph'],
    infos: ['Default info'],
    card: true,
    paragraphsCard: ['Default card paragraph'],
    htmlCode: '<strong>Default HTML Code</strong>',
    size: 'md',
    slot: '',
    cbWhenHide: () => console.log('Dialog hidden'),
    titleI18n: 'default.i18n.title',
    paragraphsI18n: ['default.i18n.paragraph'],
  },
  argTypes: {
    title: { control: 'text' },
    upper_title: { control: 'text' },
    closeBtn: { control: 'boolean' },
    icon: { control: 'text' },
    iconColor: { control: 'color' },
    paragraphs: { control: 'array' },
    infos: { control: 'array' },
    card: { control: 'boolean' },
    paragraphsCard: { control: 'array' },
    htmlCode: { control: 'text' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'], // Tamanhos disponíveis
    },
    slot: { control: 'text' },
    cbWhenHide: { action: 'cbWhenHide' }, // Usa uma ação do Storybook
    titleI18n: { control: 'text' },
    paragraphsI18n: { control: 'array' },
  },
};

export const Default = () =>
  defineComponent({
    setup() {
      const $q = useQuasar();

      const openDialog = () => {
        $q.dialog({
          component: DialogSystem,
          componentProps: {
            title: 'Teste',
            closeBtn: true,
            icon: 'live_tv',
            iconColor: '#1AA97E',
            paragrahs: ['RESUL_SCREEN_MODAL_TEXT'],
            persistent: true,
            actions: [
              {
                label: 'RESUL_SCREEN_MODAL_BTN',
                callback: () => {},
                action_ok: true,
                cta: true,
              },
            ],
          },
        });
      };

      return {
        openDialog,
      };
    },
    template: `
      <button
        @click="openDialog"
        style="padding: 20px"
      >Open Dialog</button>
    `,
  });
