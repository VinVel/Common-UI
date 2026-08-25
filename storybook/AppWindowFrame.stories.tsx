import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppWindowFrame } from "../ui/AppWindowFrame";
import type { WindowController } from "../ui/windowController";
import { Typography } from "../ui/Typography";

const desktopWindowController: WindowController = {
  isDesktopPlatform: () => true,
  startDragging: async () => undefined,
  toggleMaximize: async () => undefined,
  minimize: async () => undefined,
  close: async () => undefined,
};

const meta = {
  title: "UI/AppWindowFrame",
  component: AppWindowFrame,
  parameters: { layout: "fullscreen" },
  args: {
    children: <Typography variant="body">Application content</Typography>,
  },
} satisfies Meta<typeof AppWindowFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BrowserFallback: Story = {};
export const DesktopTitlebar: Story = {
  args: {
    iconSrc: "/Hyperion-icon.svg",
    titlebarLabel: "Preview window controls",
    windowController: desktopWindowController,
  },
};
