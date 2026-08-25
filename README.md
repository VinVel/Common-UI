# Velcore Components

This directory is the shared UI source boundary for Velcore Tauri apps. It is
kept as ordinary source so each host app can own its own dependency versions and
build configuration.

## Host App Contract

Host apps provide a `ThemePreferences` implementation when theme settings
should be persisted by the host. The shared UI itself does not depend on a
native runtime and uses an in-memory implementation by default.

`AppWindowFrame` accepts a `WindowController` implementation for native window
actions. Without one, it renders as a regular browser-compatible wrapper.

`AppWindowFrame` does not own app branding. Pass app-specific assets from the
host app, for example:

```tsx
<AppWindowFrame iconSrc="/MyApp-icon.svg" titlebarLabel="MyApp window controls">
  {children}
</AppWindowFrame>
```

The shared UI expects the host app to provide compatible versions of React,
`lucide-react`, `overlayscrollbars`, and `overlayscrollbars-react`.

## Structure

- `ui/`: reusable React components and shared CSS
- `context/`: shared React providers
- `hooks/`: app-agnostic React hooks
- `themes/`: palette and primitive design tokens
