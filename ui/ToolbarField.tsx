/*
 * Copyright (c) 2026 VinVel
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import type { InputHTMLAttributes, ReactNode } from "react";
import { classNames } from "./classNames";

type ToolbarFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
};

export function ToolbarField({
  className,
  icon,
  type = "text",
  ...props
}: ToolbarFieldProps) {
  return (
    <label className={classNames("ui-toolbar-field", className)}>
      {icon ? <span className="ui-toolbar-field__icon">{icon}</span> : null}
      <input className="ui-toolbar-field__input" type={type} {...props} />
    </label>
  );
}
