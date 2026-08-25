import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "../ui/Typography";

const meta = {
  title: "UI/Typography",
  component: Typography,
  args: { variant: "body", children: "Readable interface text" },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "body",
        "bodySmall",
        "meta",
        "label",
        "eyebrow",
      ],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {};
export const Heading: Story = {
  args: { variant: "h1", children: "Page heading" },
};
export const Muted: Story = { args: { muted: true } };
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "var(--spacing-gap-medium)" }}>
      <Typography variant="eyebrow">Eyebrow</Typography>
      <Typography variant="h1">Heading one</Typography>
      <Typography variant="h2">Heading two</Typography>
      <Typography variant="h3">Heading three</Typography>
      <Typography variant="body">Body text</Typography>
      <Typography variant="bodySmall">Small body text</Typography>
      <Typography variant="label">Label</Typography>
      <Typography variant="meta" muted>
        Metadata
      </Typography>
    </div>
  ),
};
