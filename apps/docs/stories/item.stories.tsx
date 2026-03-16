import type { Meta, StoryObj } from "@storybook/react-vite";
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemGroup, Button } from "@cosmic/ui";

const meta: Meta<typeof Item> = {
  title: "UI/Item",
  component: Item,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "muted"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "xs"],
    },
  },
  args: {
    variant: "default",
    size: "default",
  },
};

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
  render: (args) => (
    <Item {...args} className="w-80">
      <ItemContent>
        <ItemTitle>Item Title</ItemTitle>
        <ItemDescription>A brief description of this item.</ItemDescription>
      </ItemContent>
    </Item>
  ),
};

export const WithActions: Story = {
  render: () => (
    <ItemGroup className="w-80">
      {["First", "Second", "Third"].map((label) => (
        <Item key={label} variant="outline">
          <ItemContent>
            <ItemTitle>{label} Item</ItemTitle>
            <ItemDescription>Description for {label.toLowerCase()} item.</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="sm">Edit</Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  ),
};
