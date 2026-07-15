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

type PanelProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  narrow?: boolean;
  as?: "section" | "article" | "div";
};

export function Panel({
  as: Element = "section",
  narrow = false,
  className,
  children,
  ...props
}: PanelProps) {
  return (
    <Element
      className={classNames(
        "ui-panel",
        narrow && "ui-panel--narrow",
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
}

export function Card({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <article className={classNames("ui-card", className)} {...props}>
      {children}
    </article>
  );
}
