import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScreenHeader, ScreenMain, ScreenShell } from "../ui/Screen";
import { Typography } from "../ui/Typography";

const meta = {
  title: "UI/Screen",
  component: ScreenShell,
  args: { children: null },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ScreenShell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ScreenShell>
      <ScreenHeader>
        <Typography variant="h1">Settings</Typography>
      </ScreenHeader>
      <ScreenMain>
        <Typography variant="body">
          A responsive screen content area.
        </Typography>
      </ScreenMain>
    </ScreenShell>
  ),
};
export const Centered: Story = {
  render: () => (
    <ScreenShell>
      <ScreenMain centered>
        <Typography variant="h2">Centered content</Typography>
      </ScreenMain>
    </ScreenShell>
  ),
};
export const WideAndPadded: Story = {
  render: () => (
    <ScreenShell>
      <ScreenHeader wide>
        <Typography variant="h1">Wide layout</Typography>
      </ScreenHeader>
      <ScreenMain wide largeBlockPadding>
        <Typography variant="body">
          Extra breathing room for a prominent page.
        </Typography>
      </ScreenMain>
    </ScreenShell>
  ),
};
