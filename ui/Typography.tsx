/*
 * Copyright (c) 2026 VinVel
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { createElement, type HTMLAttributes, type ReactNode } from "react";
import { classNames } from "./classNames";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "bodySmall"
  | "meta"
  | "label"
  | "eyebrow";

type TypographyElement = "h1" | "h2" | "h3" | "p" | "span";

type TypographyProps = HTMLAttributes<HTMLElement> & {
  as?: TypographyElement;
  variant: TypographyVariant;
  muted?: boolean;
  children: ReactNode;
};

const defaultElements: Record<TypographyVariant, TypographyElement> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  bodySmall: "p",
  meta: "span",
  label: "span",
  eyebrow: "p",
};

export function Typography({
  as,
  variant,
  muted = false,
  className,
  children,
  ...props
}: TypographyProps) {
  return createElement(
    as ?? defaultElements[variant],
    {
      className: classNames(
        "ui-typography",
        `ui-typography--${variant}`,
        muted && "ui-typography--muted",
        className,
      ),
      ...props,
    },
    children,
  );
}
