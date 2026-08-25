/*
 * Copyright (c) 2026 VinVel
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export type WindowController = {
  isDesktopPlatform: () => boolean;
  startDragging: () => Promise<void>;
  toggleMaximize: () => Promise<void>;
  minimize: () => Promise<void>;
  close: () => Promise<void>;
};

// Keeps AppWindowFrame usable as a browser component. Because isDesktopPlatform
// returns false, this adapter never renders window decorations or performs any
// native action; it only provides a safe fallback when a host does not inject
// a controller.
export function createFallbackWindowController(): WindowController {
  return {
    isDesktopPlatform: () => false,
    startDragging: async () => undefined,
    toggleMaximize: async () => undefined,
    minimize: async () => undefined,
    close: async () => undefined,
  };
}
