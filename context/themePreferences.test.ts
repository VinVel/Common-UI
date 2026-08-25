/*
 * Copyright (c) 2026 VinVel
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { describe, expect, it } from "vitest";
import { DEFAULT_THEME_PRESET } from "../themes/colorpalette";
import { createInMemoryThemePreferences } from "./themePreferences";

describe("createInMemoryThemePreferences", () => {
  it("provides stable defaults without a host runtime", async () => {
    const preferences = createInMemoryThemePreferences();

    await expect(preferences.getThemeMode()).resolves.toBe("system");
    await expect(
      preferences.getThemePreset([DEFAULT_THEME_PRESET], DEFAULT_THEME_PRESET),
    ).resolves.toBe(DEFAULT_THEME_PRESET);
  });

  it("keeps updates in memory", async () => {
    const preferences = createInMemoryThemePreferences();

    await preferences.setThemeMode("dark");
    await preferences.setThemePreset("ocean", ["ocean"], "ocean");

    await expect(preferences.getThemeMode()).resolves.toBe("dark");
    await expect(preferences.getThemePreset(["ocean"], "ocean")).resolves.toBe(
      "ocean",
    );
  });
});
