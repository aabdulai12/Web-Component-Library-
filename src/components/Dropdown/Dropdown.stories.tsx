import { Dropdown } from './Dropdown';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Dropdown',  // Group under Components
  component: Dropdown,
  argTypes: {
    options: { control: 'object' },  // Use 'object' for array-like controls
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

// Enabled Dropdown Story
export const Enabled: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    backgroundColor: '#ffffff',
    disabled: false,  // Enabled state
  },
};

// Disabled Dropdown Story
export const Disabled: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    backgroundColor: '#f5f5f5',
    disabled: true,  // Disabled state
  },
};
