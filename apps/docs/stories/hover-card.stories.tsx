import type { Meta, StoryObj } from "@storybook/react-vite";
import { HoverCard, HoverCardTrigger, HoverCardContent, Button } from "@cosmic/ui";

const meta: Meta<typeof HoverCard> = {
  title: "UI/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@shadcn</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">@shadcn</p>
          <p className="text-sm text-muted-foreground">
            The creator of shadcn/ui. Building design systems and open source tools.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
