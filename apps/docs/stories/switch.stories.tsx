import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch, Label } from "@cosmic/ui";

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
  },
  args: {
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane mode</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="notifications" defaultChecked />
      <Label htmlFor="notifications">Notifications enabled</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Switch id="sw-disabled" disabled />
        <Label htmlFor="sw-disabled" className="opacity-50">Disabled off</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="sw-disabled-checked" disabled defaultChecked />
        <Label htmlFor="sw-disabled-checked" className="opacity-50">Disabled on</Label>
      </div>
    </div>
  ),
};
