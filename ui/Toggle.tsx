/*
 * Copyright (c) 2026 VinVel
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import type { ButtonHTMLAttributes } from "react";
import { classNames } from "./classNames";

type ToggleProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "aria-pressed"
> & {
  checked: boolean;
  label: string;
};

export function Toggle({
  checked,
  label,
  className,
  type = "button",
  ...props
}: ToggleProps) {
  return (
    <button
      aria-label={label}
      aria-pressed={checked}
      className={classNames(
        "ui-toggle",
        checked && "ui-toggle--checked",
        className,
      )}
      type={type}
      {...props}
    >
      <span className="ui-toggle__track" aria-hidden="true">
        <span className="ui-toggle__thumb" />
      </span>
    </button>
  );
}
