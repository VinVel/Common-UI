import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bell, Plus } from "lucide-react";
import { Button } from "../ui/Button";

const meta = {
  title: "UI/Button",
  component: Button,
  args: {
    children: "Continue",
    variant: "primary",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "icon", "destructive"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
export const FullWidth: Story = { args: { fullWidth: true } };
export const IconOnly: Story = {
  args: { children: <Bell aria-label="Notifications" />, iconOnly: true },
};
export const WithLeadingIcon: Story = {
  args: {
    children: (
      <>
        <Plus aria-hidden="true" /> Add room
      </>
    ),
  },
};
