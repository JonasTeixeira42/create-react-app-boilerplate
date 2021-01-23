import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'StoryBook',
    description: 'Hello World',
  },
} as Meta;

export const Default: Story = (args) => <Main {...args} />;
