import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "@cosmic/ui";

const meta: Meta<typeof Slider> = {
  title: "UI/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
  },
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: (args) => <Slider {...args} className="w-64" />,
};

export const Range: Story = {
  render: () => <Slider defaultValue={[25, 75]} min={0} max={100} className="w-64" />,
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => <Slider {...args} className="w-64" />,
};
