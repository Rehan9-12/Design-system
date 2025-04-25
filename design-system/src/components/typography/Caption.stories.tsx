// Caption.stories.tsx
//import React from 'react';
import { Caption } from './Caption';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Caption> = {
  title: 'Typography/Caption',
  component: Caption,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Caption>;

export const Default: Story = {
  args: {
    children: 'This is a caption.',
  },
};
