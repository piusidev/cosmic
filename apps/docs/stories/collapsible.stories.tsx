import type { Meta, StoryObj } from "@storybook/react-vite";
import { Collapsible, CollapsibleTrigger, CollapsibleContent, Button } from "@cosmic/ui";

const meta: Meta<typeof Collapsible> = {
  title: "UI/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-72">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Show details</span>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">Toggle</Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="mt-2">
        <div className="rounded-lg border p-3 text-sm text-muted-foreground">
          This content is hidden by default and revealed on toggle.
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};
