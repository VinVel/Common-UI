import type { Meta, StoryObj } from "@storybook/react-vite";
import { Archive, Hash, Home, Settings } from "lucide-react";
import { AppRail, AppRailButton } from "../ui/AppRail";

const meta = {
  title: "UI/AppRail",
  component: AppRail,
  args: { children: null },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AppRail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Navigation: Story = {
  render: () => (
    <AppRail aria-label="Primary navigation">
      <AppRailButton aria-label="Home" isActive>
        <Home aria-hidden="true" />
      </AppRailButton>
      <AppRailButton aria-label="Rooms">
        <Hash aria-hidden="true" />
      </AppRailButton>
      <AppRailButton aria-label="Archive">
        <Archive aria-hidden="true" />
      </AppRailButton>
      <AppRailButton aria-label="Settings">
        <Settings aria-hidden="true" />
      </AppRailButton>
    </AppRail>
  ),
};
export const Disabled: Story = {
  render: () => (
    <AppRail>
      <AppRailButton aria-label="Unavailable" disabled>
        <Settings aria-hidden="true" />
      </AppRailButton>
    </AppRail>
  ),
};
