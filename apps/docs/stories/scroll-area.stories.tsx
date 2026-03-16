import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea, ScrollBar } from "@cosmic/ui";

const meta: Meta<typeof ScrollArea> = {
  title: "UI/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

const tags = Array.from({ length: 50 }, (_, i) => `Tag ${i + 1}`);

export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-48 w-48 rounded-lg border p-3">
      <div className="flex flex-col gap-1">
        {tags.map((tag) => (
          <div key={tag} className="text-sm">{tag}</div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-64 whitespace-nowrap rounded-lg border">
      <div className="flex gap-3 p-3">
        {tags.slice(0, 20).map((tag) => (
          <div key={tag} className="shrink-0 rounded bg-muted px-3 py-1 text-sm">{tag}</div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};
