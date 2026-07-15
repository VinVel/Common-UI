/*
 * Copyright (c) 2026 VinVel
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export const motion = {
  durationFast: "0.16s",
  durationBase: "0.2s",
  easingStandard: "ease",
  nudgeUpSmall: "translateY(-1px)",
  nudgeUpMedium: "translateY(-2px)",
  nudgeInlineSmall: "translateX(2px)",
} as const;

export type MotionTokens = typeof motion;
