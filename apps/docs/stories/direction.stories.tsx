import type { Meta, StoryObj } from "@storybook/react-vite";
import { DirectionProvider, Input, Button } from "@cosmic/ui";

const meta: Meta<typeof DirectionProvider> = {
  title: "UI/Direction",
  component: DirectionProvider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DirectionProvider>;

export const LTR: Story = {
  render: () => (
    <DirectionProvider dir="ltr">
      <div className="flex flex-col gap-3 w-72" dir="ltr">
        <p className="text-sm text-muted-foreground">Left-to-right (LTR)</p>
        <Input placeholder="Enter text…" />
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Submit</Button>
        </div>
      </div>
    </DirectionProvider>
  ),
};

export const RTL: Story = {
  render: () => (
    <DirectionProvider dir="rtl">
      <div className="flex flex-col gap-3 w-72" dir="rtl">
        <p className="text-sm text-muted-foreground">Right-to-left (RTL)</p>
        <Input placeholder="أدخل النص…" />
        <div className="flex gap-2">
          <Button variant="outline">إلغاء</Button>
          <Button>إرسال</Button>
        </div>
      </div>
    </DirectionProvider>
  ),
};
