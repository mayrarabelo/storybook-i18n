import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/vue3';

import DialogSystem from 'src/components/DialogSystem.vue';

// Configuração da metadata
const meta = {
  title: 'Modais/DialogSystem',
  component: DialogSystem,
  tags: ['autodocs'],
  argTypes: {
    // Textos e Títulos
    upper_title: { control: 'text', description: 'Título superior do diálogo' },
    title: { control: 'text', description: 'Título principal do diálogo' },
    titleI18n: { control: 'text', description: 'Título traduzido (i18n)' },

    // Ícones
    icon: {
      control: 'select',
      options: ['', 'success', 'error', 'warning', 'cancel'],
      description: 'Ícone exibido no diálogo',
    },
    iconColor: { control: 'text', description: 'Cor do ícone exibido' },

    // Parágrafos e conteúdo
    paragrahs: {
      control: 'object',
      description: 'Lista de parágrafos para exibição no diálogo',
      defaultValue: ['Item 1', 'Item 2', 'Item 3'],
    },
    paragrahsI18n: {
      control: 'object',
      description: 'Lista de parágrafos traduzidos (i18n)',
    },
    infos: {
      control: 'object',
      description: 'Lista de informações adicionais exibidas no diálogo',
    },
    htmlCode: {
      control: 'text',
      description: 'HTML opcional exibido no diálogo',
    },

    // Configurações do diálogo
    closeBtn: { control: 'boolean', description: 'Exibe botão de fechar' },
    persistent: {
      control: 'boolean',
      description: 'Torna o diálogo persistente',
    },
    card: { control: 'boolean', description: 'Ativa exibição estilo cartão' },
    paragrahsCard: {
      control: 'object',
      description: 'Lista de parágrafos exibidos no cartão',
    },
    size: {
      control: 'boolean',
      description: 'Define o tamanho do diálogo (grande ou padrão)',
    },
    slot: {
      control: 'boolean',
      description: 'Habilita uso de slots personalizados',
    },

    // Ações do diálogo
    actions: {
      control: 'object',
      description: 'Lista de ações configuráveis do diálogo',
      defaultValue: [
        {
          label: 'Confirmar',
          callback: action(''),
          cta: true,
          action_dismiss: false,
          action_ok: false,
        },
        {
          label: 'Cancelar',
          callback: action(''),
          cta: false,
          action_dismiss: true,
          action_ok: false,
        },
      ],
    },
  },
  args: {}, // Argumentos padrão (opcional)
} satisfies Meta<typeof DialogSystem>;

export default meta;
type Story = StoryObj<typeof meta>;

// História de exemplo
export const Teste: Story = {
  args: {
    upper_title: 'Exemplo de Diálogo',
    title: 'Atenção',
    icon: 'warning',
    paragrahs: ['Este é um exemplo de teste do diálogo.'],
    persistent: true,
    closeBtn: true,
    actions: [
      {
        label: 'Confirmar',
        callback: action(''),
        cta: true,
        action_ok: true,
      },
      {
        label: 'Cancelar',
        callback: action(''),
        action_dismiss: true,
      },
    ],
  },
};
