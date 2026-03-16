import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@cosmic/ui";

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "line"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    variant: "default",
    orientation: "horizontal",
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Horizontal: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-80">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account tab content.</TabsContent>
      <TabsContent value="password">Password tab content.</TabsContent>
      <TabsContent value="settings">Settings tab content.</TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="account" orientation="vertical" className="flex gap-4 w-96">
      <TabsList className="flex-col h-auto">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="account">Account tab content.</TabsContent>
        <TabsContent value="password">Password tab content.</TabsContent>
        <TabsContent value="settings">Settings tab content.</TabsContent>
      </div>
    </Tabs>
  ),
};

export const LineVariant: Story = {
  render: () => (
    <Tabs defaultValue="account" variant="line" className="w-80">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account tab content.</TabsContent>
      <TabsContent value="password">Password tab content.</TabsContent>
      <TabsContent value="settings">Settings tab content.</TabsContent>
    </Tabs>
  ),
};
