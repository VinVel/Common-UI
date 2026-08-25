import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { AppErrorBoundary } from "../ui/AppErrorBoundary";
import { Button } from "../ui/Button";
import { Typography } from "../ui/Typography";

function ControlledFailure() {
  const [shouldThrow, setShouldThrow] = useState(false);
  if (shouldThrow) {
    throw new Error("The previewed component failed deliberately.");
  }

  return (
    <div style={{ display: "grid", gap: "var(--spacing-gap-medium)" }}>
      <Typography variant="body">The child component is healthy.</Typography>
      <Button onClick={() => setShouldThrow(true)}>Trigger error state</Button>
    </div>
  );
}

const meta = {
  title: "UI/AppErrorBoundary",
  component: AppErrorBoundary,
  args: { children: null },
} satisfies Meta<typeof AppErrorBoundary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Healthy: Story = {
  render: () => (
    <AppErrorBoundary>
      <ControlledFailure />
    </AppErrorBoundary>
  ),
};
