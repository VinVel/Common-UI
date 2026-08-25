/*
 * Copyright (c) 2026 VinVel
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import type { ThemeMode, ThemePresetName } from "../themes/colorpalette";
import { DEFAULT_THEME_PRESET } from "../themes/colorpalette";

export type ThemePreferences = {
  getThemeMode: () => Promise<string>;
  setThemeMode: (mode: ThemeMode) => Promise<string>;
  getThemePreset: (
    supportedPresets: readonly ThemePresetName[],
    defaultPreset: ThemePresetName,
  ) => Promise<string>;
  setThemePreset: (
    preset: ThemePresetName,
    supportedPresets: readonly ThemePresetName[],
    defaultPreset: ThemePresetName,
  ) => Promise<string>;
};

// Provides predictable behavior for browser rendering and isolated UI tests.
export function createInMemoryThemePreferences(): ThemePreferences {
  let themeMode: ThemeMode = "system";
  let themePreset: ThemePresetName = DEFAULT_THEME_PRESET;

  return {
    async getThemeMode() {
      return themeMode;
    },
    async setThemeMode(nextThemeMode) {
      themeMode = nextThemeMode;
      return themeMode;
    },
    async getThemePreset(_supportedPresets, defaultPreset) {
      return themePreset || defaultPreset;
    },
    async setThemePreset(nextThemePreset) {
      themePreset = nextThemePreset;
      return themePreset;
    },
  };
}
