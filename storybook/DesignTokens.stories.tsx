import type { Meta, StoryObj } from "@storybook/react-vite";
import { primitives, themePalettes, type ThemePresetName } from "../themes";
import { Typography } from "../ui/Typography";

const meta = {
  title: "Design Tokens",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const primitiveGroups = Object.entries(primitives) as Array<
  [string, Record<string, string>]
>;

function TokenGroup({
  name,
  tokens,
}: {
  name: string;
  tokens: Record<string, string>;
}) {
  return (
    <section style={{ display: "grid", gap: "var(--spacing-gap-small)" }}>
      <Typography variant="h3">{name}</Typography>
      {Object.entries(tokens).map(([token, value]) => (
        <div
          key={token}
          style={{
            display: "grid",
            gridTemplateColumns: "12rem 1fr",
            gap: "var(--spacing-gap-medium)",
            alignItems: "center",
          }}
        >
          <Typography variant="meta">{token}</Typography>
          <code>{value}</code>
        </div>
      ))}
    </section>
  );
}

function Palette({ preset }: { preset: ThemePresetName }) {
  return (
    <section style={{ display: "grid", gap: "var(--spacing-gap-medium)" }}>
      <Typography variant="h2">{preset}</Typography>
      {(["light", "dark"] as const).map((mode) => (
        <div
          key={mode}
          style={{ display: "grid", gap: "var(--spacing-gap-small)" }}
        >
          <Typography variant="h3">{mode}</Typography>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
              gap: "var(--spacing-gap-small)",
            }}
          >
            {Object.entries(themePalettes[preset][mode]).map(
              ([token, value]) => (
                <div
                  key={token}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2.5rem 1fr",
                    gap: "var(--spacing-gap-small)",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      background: value,
                      border: "1px solid var(--outline-variant)",
                      borderRadius: "var(--shape-radius-small)",
                      height: "2.5rem",
                    }}
                  />
                  <div>
                    <Typography variant="meta">{token}</Typography>
                    <code>{value}</code>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export const Overview: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: "var(--spacing-gap-extra-large)",
        maxWidth: "72rem",
        padding: "var(--spacing-screen-block-padding)",
      }}
    >
      <Typography variant="h1">Design tokens</Typography>
      <Typography variant="body" muted>
        Use the global toolbar to compare palettes and modes.
      </Typography>
      {primitiveGroups.map(([name, tokens]) => (
        <TokenGroup key={name} name={name} tokens={tokens} />
      ))}
      {(Object.keys(themePalettes) as ThemePresetName[]).map((preset) => (
        <Palette key={preset} preset={preset} />
      ))}
    </div>
  ),
};
