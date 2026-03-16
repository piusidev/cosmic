import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "@cosmic/ui";

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100 } },
  },
  args: {
    value: 50,
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: (args) => <Progress {...args} className="w-64" />,
};

export const Empty: Story = {
  args: { value: 0 },
  render: (args) => <Progress {...args} className="w-64" />,
};

export const Full: Story = {
  args: { value: 100 },
  render: (args) => <Progress {...args} className="w-64" />,
};
