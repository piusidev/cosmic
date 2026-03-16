import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@cosmic/ui";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search"],
    },
  },
  args: {
    placeholder: "Enter text…",
    disabled: false,
    type: "text",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: { placeholder: "Search…" },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled input" },
};

export const Password: Story = {
  args: { type: "password", placeholder: "Enter password" },
};

export const Email: Story = {
  args: { type: "email", placeholder: "you@example.com" },
};

export const Number: Story = {
  args: { type: "number", placeholder: "0" },
};
