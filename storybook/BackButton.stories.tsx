import type { Meta, StoryObj } from "@storybook/react-vite";
import { BackButton } from "../ui/BackButton";

const meta = {
  title: "UI/BackButton",
  component: BackButton,
  args: { "aria-label": "Back to settings" },
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Overlay: Story = { args: { overlay: true } };
export const Disabled: Story = { args: { disabled: true } };
