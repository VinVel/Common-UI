/*
 * Copyright (c) 2026 VinVel
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "./classNames";

type PillTone = "neutral" | "primary" | "secondary";

type PillProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: PillTone;
  children: ReactNode;
};

export function Pill({
  tone = "neutral",
  className,
  children,
  ...props
}: PillProps) {
  return (
    <span
      className={classNames("ui-pill", `ui-pill--${tone}`, className)}
      {...props}
    >
      {children}
    </span>
  );
}
