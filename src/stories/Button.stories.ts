import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
  },
  args: {
    primary: false,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

const getCaptionForLocale = (locale: string) => {
  switch (locale) {
    case 'US':
      return 'Hello!';
    case 'pt-BR':
      return 'Olá!';

    default:
      return 'Hello!';
  }
};

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

// TODO: terminar i18n
export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
  globals: { locale },
};

// export const Teste: Story = {
//   render: (label: 'Button',
//     size: 'small',, { globals: { locale } }) => {
//     const caption = getCaptionForLocale(locale);
//     return {
//       template: `${caption}`,
//     };
//   },
// };
