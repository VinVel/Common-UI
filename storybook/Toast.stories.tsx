import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../ui/Button";
import { notifyFeedback, ToastProvider } from "../ui/Toast";

const meta = {
  title: "UI/Toast",
  component: ToastProvider,
  args: { children: null },
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FeedbackStates: Story = {
  render: () => (
    <ToastProvider>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--spacing-gap-medium)",
        }}
      >
        <Button
          onClick={() =>
            notifyFeedback({
              tone: "success",
              text: "Room created successfully.",
            })
          }
        >
          Success
        </Button>
        <Button
          onClick={() =>
            notifyFeedback({ tone: "info", text: "A new sync is available." })
          }
        >
          Info
        </Button>
        <Button
          onClick={() =>
            notifyFeedback({
              tone: "warning",
              text: "Your session expires soon.",
            })
          }
        >
          Warning
        </Button>
        <Button
          variant="destructive"
          onClick={() =>
            notifyFeedback({
              tone: "error",
              text: "The message could not be sent.",
            })
          }
        >
          Error
        </Button>
      </div>
    </ToastProvider>
  ),
};

export const Actionable: Story = {
  render: () => (
    <ToastProvider>
      <Button
        onClick={() =>
          notifyFeedback({
            tone: "info",
            text: "A new device is waiting for verification.",
            actions: [{ label: "Review", onSelect: () => undefined }],
          })
        }
      >
        Show actionable toast
      </Button>
    </ToastProvider>
  ),
};
