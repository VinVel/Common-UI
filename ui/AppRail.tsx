/*
 * Copyright (c) 2026 VinVel
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { classNames } from "./classNames";

type AppRailProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

type AppRailButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isActive?: boolean;
};

export function AppRail({ className, children, ...props }: AppRailProps) {
  return (
    <aside className={classNames("ui-app-rail", className)} {...props}>
      {children}
    </aside>
  );
}

export function AppRailButton({
  className,
  children,
  isActive = false,
  type = "button",
  ...props
}: AppRailButtonProps) {
  return (
    <button
      className={classNames(
        "ui-app-rail-button",
        isActive && "ui-app-rail-button--active",
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
