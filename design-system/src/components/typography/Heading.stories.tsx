import { Heading } from './Heading';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const H1: Story = {
  args: {
    level: 1,
    children: 'This is an H1 Heading',
  },
};

export const H2: Story = {
  args: {
    level: 2,
    children: 'This is an H2 Heading',
  },
};
