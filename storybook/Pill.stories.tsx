import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pill } from "../ui/Pill";

const meta = {
  title: "UI/Pill",
  component: Pill,
  args: { children: "Active" },
  argTypes: {
    tone: { control: "select", options: ["neutral", "primary", "secondary"] },
  },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Primary: Story = { args: { tone: "primary" } };
export const Secondary: Story = { args: { tone: "secondary" } };
