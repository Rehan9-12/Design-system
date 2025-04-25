import { TextInput } from './TextInput';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof TextInput> = {
  title: 'Data Entry/TextInput',
  component: TextInput,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <TextInput
        label="Name"
        placeholder="Enter your name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        helperText="This is a helper text"
      />
    );
  },
};

export const Error: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <TextInput
        label="Email"
        placeholder="Invalid email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error
        helperText="Invalid input"
      />
    );
  },
};
