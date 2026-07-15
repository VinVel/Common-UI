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

export type FeedbackTone = "error" | "success" | "info" | "warning";

type FeedbackMessageProps = HTMLAttributes<HTMLParagraphElement> & {
  tone: FeedbackTone;
  children: ReactNode;
};

export function FeedbackMessage({
  tone,
  className,
  children,
  ...props
}: FeedbackMessageProps) {
  return (
    <p
      className={classNames("ui-feedback", `ui-feedback--${tone}`, className)}
      {...props}
    >
      {children}
    </p>
  );
}
