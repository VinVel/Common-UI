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
import { createFallbackWindowController } from "./windowController";

describe("createFallbackWindowController", () => {
  it("does not expose a desktop titlebar in browser hosts", () => {
    const controller = createFallbackWindowController();

    expect(controller.isDesktopPlatform()).toBe(false);
  });

  it("keeps window actions safe without a native host", async () => {
    const controller = createFallbackWindowController();

    await expect(controller.startDragging()).resolves.toBeUndefined();
    await expect(controller.toggleMaximize()).resolves.toBeUndefined();
    await expect(controller.minimize()).resolves.toBeUndefined();
    await expect(controller.close()).resolves.toBeUndefined();
  });
});
