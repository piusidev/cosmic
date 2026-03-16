import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@cosmic/ui";

const meta: Meta<typeof Combobox> = {
  title: "UI/Combobox",
  component: Combobox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const fruits = ["Apple", "Banana", "Cherry", "Grape", "Mango", "Orange", "Peach"];

export const Default: Story = {
  render: () => (
    <Combobox>
      <ComboboxInput placeholder="Search fruit…" className="w-56" />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No fruits found.</ComboboxEmpty>
          {fruits.map((fruit) => (
            <ComboboxItem key={fruit} value={fruit}>
              {fruit}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
};
