import type { Meta, StoryObj } from '@storybook/react';
import { MtiEditor } from '@mtiprich/core';

const meta: Meta<typeof MtiEditor> = {
  title: 'Editor',
  argTypes: {},
  component: MtiEditor,
};

export default meta;

type Story = StoryObj<typeof MtiEditor>;

export const Default: Story = {
  args: {},
};
