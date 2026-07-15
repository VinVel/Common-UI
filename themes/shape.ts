/*
 * Copyright (c) 2026 VinVel
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export const shape = {
  borderWidthThin: "1px",
  radiusExtraSmall: "4px",
  radiusSmall: "8px",
  radiusMedium: "12px",
  radiusLarge: "16px",
  radiusRound: "999px",
  radiusCircle: "50%",
} as const;

export type ShapeTokens = typeof shape;
