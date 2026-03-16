import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupInput } from "@cosmic/ui";

const meta: Meta<typeof InputGroup> = {
  title: "UI/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const WithAddon: Story = {
  render: () => (
    <InputGroup className="w-56">
      <InputGroupAddon align="inline-start">
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="yoursite.com" />
    </InputGroup>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <InputGroup className="w-56">
      <InputGroupAddon align="inline-start">
        <InputGroupText>@</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="username" />
    </InputGroup>
  ),
};
