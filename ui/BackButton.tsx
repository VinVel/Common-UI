/*
 * Copyright (c) 2026 VinVel
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { ChevronLeft } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
import { Button } from "./Button";
import { classNames } from "./classNames";

type BackButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  overlay?: boolean;
};

export function BackButton({
  "aria-label": ariaLabel = "Back",
  className,
  overlay = false,
  ...props
}: BackButtonProps) {
  return (
    <Button
      aria-label={ariaLabel}
      className={classNames(
        "ui-back-button",
        overlay && "ui-back-button--overlay",
        className,
      )}
      iconOnly
      variant="ghost"
      {...props}
    >
      <ChevronLeft aria-hidden="true" />
    </Button>
  );
}
