import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "../ui/Toggle";

const meta = {
  title: "UI/Toggle",
  component: Toggle,
  args: { checked: true, label: "Enable notifications" },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {};
export const Unchecked: Story = { args: { checked: false } };
export const Disabled: Story = { args: { disabled: true } };
