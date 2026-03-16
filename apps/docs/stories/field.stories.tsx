import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field, FieldLabel, FieldDescription, FieldError, Input } from "@cosmic/ui";

const meta: Meta<typeof Field> = {
  title: "UI/Field",
  component: Field,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["vertical", "horizontal", "responsive"],
    },
  },
  args: {
    orientation: "vertical",
  },
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  render: (args) => (
    <Field {...args} className="max-w-sm">
      <Input placeholder="Enter value" />
    </Field>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="name">Full name</FieldLabel>
      <Input id="name" placeholder="John Doe" />
      <FieldDescription>This is your publicly displayed name.</FieldDescription>
    </Field>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field className="max-w-sm" data-invalid="true">
      <FieldLabel htmlFor="email-err">Email</FieldLabel>
      <Input id="email-err" type="email" placeholder="you@example.com" aria-invalid />
      <FieldError>Please enter a valid email address.</FieldError>
    </Field>
  ),
};
