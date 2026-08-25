import type { Meta, StoryObj } from "@storybook/react-vite";
import { Search } from "lucide-react";
import { ToolbarField } from "../ui/ToolbarField";

const meta = {
  title: "UI/ToolbarField",
  component: ToolbarField,
  args: { placeholder: "Search rooms" },
} satisfies Meta<typeof ToolbarField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithIcon: Story = {
  args: { icon: <Search aria-hidden="true" size={16} /> },
};
export const Disabled: Story = { args: { disabled: true } };
