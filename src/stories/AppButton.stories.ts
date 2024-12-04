import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import AppButton from './../components/AppButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/AppButton',
  component: AppButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['white', 'primary', 'secondary'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    textColor: { control: 'color' },
  },
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
  },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const White: Story = {
  args: {
    color: 'white',
    label: 'Button',
    size: 'lg',
    textColor: 'black',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Button',
    size: 'lg',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    label: 'Button',
    size: 'lg',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'lg',
    color: 'primary',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'sm',
    color: 'primary',
  },
};
