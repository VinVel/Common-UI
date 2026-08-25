import type { Meta, StoryObj } from "@storybook/react-vite";
import { FeedbackMessage } from "../ui/FeedbackMessage";

const meta = {
  title: "UI/FeedbackMessage",
  component: FeedbackMessage,
  args: { tone: "info", children: "Your changes have been saved." },
  argTypes: {
    tone: {
      control: "select",
      options: ["error", "success", "info", "warning"],
    },
  },
} satisfies Meta<typeof FeedbackMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};
export const Success: Story = { args: { tone: "success" } };
export const Warning: Story = { args: { tone: "warning" } };
export const Error: Story = {
  args: { tone: "error", children: "Something went wrong." },
};
