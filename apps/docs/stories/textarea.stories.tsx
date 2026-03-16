import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "@cosmic/ui";

const meta: Meta<typeof Textarea> = {
  title: "UI/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    placeholder: "Enter text…",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: { placeholder: "Write your message here…" },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled textarea" },
};
