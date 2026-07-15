/*
 * Copyright (c) 2026 VinVel
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { elevation } from "./elevation";
import { effects } from "./effects";
import { layout } from "./layout";
import { motion } from "./motion";
import { shape } from "./shape";
import { sizing } from "./sizing";
import { spacing } from "./spacing";
import { typography } from "./typography";

export const primitives = {
  typography,
  spacing,
  sizing,
  shape,
  elevation,
  effects,
  motion,
  layout,
} as const;

export type ThemePrimitives = typeof primitives;
