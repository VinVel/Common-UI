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

type EmptyStateProps = HTMLAttributes<HTMLElement> & {
  title: ReactNode;
  copy: ReactNode;
  graphic?: ReactNode;
  actions?: ReactNode;
};

export function EmptyState({
  title,
  copy,
  graphic,
  actions,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <section className={classNames("ui-empty-state", className)} {...props}>
      {graphic ? (
        <div className="ui-empty-state__graphic">{graphic}</div>
      ) : null}
      <div className="ui-empty-state__copy">
        <h2 className="ui-empty-state__title">{title}</h2>
        <p className="ui-empty-state__text">{copy}</p>
      </div>
      {actions ? (
        <div className="ui-empty-state__actions">{actions}</div>
      ) : null}
    </section>
  );
}
