import type { Meta, StoryObj } from "@storybook/react-vite";
import { Search, Users } from "lucide-react";
import { Button } from "../ui/Button";
import { EmptyState } from "../ui/EmptyState";

const meta = {
  title: "UI/EmptyState",
  component: EmptyState,
  args: {
    title: "No rooms found",
    copy: "Try a different search or discover a public room.",
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithGraphicAndAction: Story = {
  args: {
    graphic: <Users aria-hidden="true" size={40} />,
    actions: <Button variant="primary">Discover rooms</Button>,
  },
};
export const SearchResult: Story = {
  args: {
    title: "Nothing matched your search",
    graphic: <Search aria-hidden="true" size={40} />,
  },
};
