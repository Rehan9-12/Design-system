
import { Paragraph } from './Paragraph';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Paragraph> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
  args: {
    children: 'This is a paragraph of text.',
    size: 'md',
  },
};
