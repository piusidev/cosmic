import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "@cosmic/ui";

const meta: Meta<typeof Spinner> = {
  title: "UI/Spinner",
  component: Spinner,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
