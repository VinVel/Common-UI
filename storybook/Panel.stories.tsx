import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, Panel } from "../ui/Panel";

const meta = {
  title: "UI/Panel",
  component: Panel,
  args: { children: "Panel content" },
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Narrow: Story = { args: { narrow: true } };
export const CardVariant: Story = {
  render: () => <Card>Card content with a slightly lighter surface.</Card>,
};
