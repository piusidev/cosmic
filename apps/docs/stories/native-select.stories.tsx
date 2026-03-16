import type { Meta, StoryObj } from "@storybook/react-vite";
import { NativeSelect } from "@cosmic/ui";

const meta: Meta<typeof NativeSelect> = {
  title: "UI/NativeSelect",
  component: NativeSelect,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof NativeSelect>;

export const Default: Story = {
  render: (args) => (
    <NativeSelect {...args} className="w-48">
      <option value="">Select a fruit</option>
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="cherry">Cherry</option>
    </NativeSelect>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <NativeSelect {...args} className="w-48">
      <option value="">Disabled select</option>
      <option value="one">Option 1</option>
    </NativeSelect>
  ),
};
