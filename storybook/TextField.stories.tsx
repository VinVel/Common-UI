import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextField } from "../ui/TextField";

const meta = {
  title: "UI/TextField",
  component: TextField,
  args: {
    label: "Display name",
    placeholder: "Enter a display name",
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Required: Story = { args: { isRequiredVisible: true } };
export const Invalid: Story = {
  args: { isInvalid: true, helperText: "This value is not valid." },
};
export const Password: Story = {
  args: { label: "Password", type: "password", value: "secret-value" },
};
export const Disabled: Story = {
  args: { disabled: true, value: "Read only value" },
};
