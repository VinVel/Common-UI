/*
 * Copyright (c) 2026 VinVel
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import type { ErrorInfo } from "react";
import { describe, expect, it, vi } from "vitest";
import { AppErrorBoundary } from "./AppErrorBoundary";

describe("AppErrorBoundary", () => {
  it("reports caught render failures through the optional callback", () => {
    const onError = vi.fn();
    const boundary = new AppErrorBoundary({ children: "content", onError });
    const error = new Error("render failed");
    const errorInfo = { componentStack: "Component" } as ErrorInfo;

    boundary.componentDidCatch(error, errorInfo);

    expect(onError).toHaveBeenCalledWith(error, errorInfo);
  });

  it("keeps the existing error message fallback", () => {
    expect(
      AppErrorBoundary.getDerivedStateFromError(new Error("failed")),
    ).toEqual({ errorMessage: "failed" });
  });
});
