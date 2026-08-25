import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea } from "../ui/ScrollArea";
import { Typography } from "../ui/Typography";

const meta = {
  title: "UI/ScrollArea",
  component: ScrollArea,
  args: { children: null },
  parameters: { layout: "centered" },
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const messages = Array.from(
  { length: 18 },
  (_, index) => `Message ${index + 1}`,
);

export const VerticalOverflow: Story = {
  render: () => (
    <ScrollArea style={{ height: "16rem", width: "24rem" }}>
      <div style={{ display: "grid", gap: "var(--spacing-gap-small)" }}>
        {messages.map((message) => (
          <Typography key={message} variant="bodySmall">
            {message}
          </Typography>
        ))}
      </div>
    </ScrollArea>
  ),
};
export const ShortContent: Story = {
  render: () => (
    <ScrollArea style={{ height: "8rem", width: "24rem" }}>
      <Typography variant="body">
        Content that does not need scrolling.
      </Typography>
    </ScrollArea>
  ),
};
