/*
 * Copyright (c) 2026 VinVel
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export const effects = {
  // Shared overlay blur for modal scrims that should soften the inactive app.
  overlayBackdropBlur: "blur(14px)",
} as const;

export type EffectsTokens = typeof effects;
