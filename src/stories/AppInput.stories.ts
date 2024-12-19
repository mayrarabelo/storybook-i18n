import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import AppInput from './../components/AppInput.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Inputs/AppInput',
  component: AppInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    maxlength: { control: 'text' },
    titleI18n: { control: 'text' },
    labelI18n: { control: 'text' },
    placeholderI18n: { control: 'text' },
    mask: { control: 'text' },
    prefix: { control: 'text' },
  },
  args: {
    mandatory: false,
    optional: false,
    disable: false,
    reverseFillMask: false,
    unmaskedValue: false,
    noLazyRules: false,
    readonly: false,
    conditionalMandatory: false,
  },
} satisfies Meta<typeof AppInput>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const titleI18n: Story = {
  args: {
    // TODO: usando o i18n
    titleI18n: 'titleI18n',
  },
};

// export const Textinhoinho: Story = {
//   args: {
//     primary: false,
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     label: 'Button',
//     size: 'large',
//   },
// };

// export const Small: Story = {
//   args: {
//     label: 'Button',
//     size: 'small',
//   },
// };
