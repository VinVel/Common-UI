# Velcore Components

This directory is the shared UI source boundary for Velcore Tauri apps. It is
kept as ordinary source so each host app can own its own dependency versions and
build configuration.

## Host App Contract

Host apps that mount `ThemeProvider` must expose these Tauri commands:

- `get_theme_mode`
- `set_theme_mode`
- `get_theme_preset`
- `set_theme_preset`

`AppWindowFrame` does not own app branding. Pass app-specific assets from the
host app, for example:

```tsx
<AppWindowFrame iconSrc="/MyApp-icon.svg" titlebarLabel="MyApp window controls">
  {children}
</AppWindowFrame>
```

The shared UI expects the host app to provide compatible versions of React,
`@tauri-apps/api`, `@tauri-apps/plugin-os`, `lucide-react`,
`overlayscrollbars`, and `overlayscrollbars-react`.

## Structure

- `ui/`: reusable React components and shared CSS
- `context/`: shared React providers
- `hooks/`: app-agnostic React hooks
- `themes/`: palette and primitive design tokens
