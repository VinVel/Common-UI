/*
 * Copyright (c) 2026 VinVel
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Component, type ErrorInfo, type ReactNode } from "react";
import { Button } from "./Button";
import { Typography } from "./Typography";

type AppErrorBoundaryProps = {
  children: ReactNode;
};

type AppErrorBoundaryState = {
  errorMessage: string | null;
};

export class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = {
    errorMessage: null,
  };

  static getDerivedStateFromError(error: unknown): AppErrorBoundaryState {
    return {
      errorMessage:
        error instanceof Error ? error.message : "Unexpected UI error.",
    };
  }

  componentDidCatch(error: unknown, errorInfo: ErrorInfo) {
    console.error("Velcore UI render failure", error, errorInfo);
  }

  render() {
    if (!this.state.errorMessage) {
      return this.props.children;
    }

    return (
      <main className="ui-app-error-boundary" role="alert">
        <div className="ui-app-error-boundary__content">
          <Typography as="h1" variant="h2">
            The interface crashed
          </Typography>
          <Typography variant="body" muted>
            {this.state.errorMessage}
          </Typography>
          <Button variant="primary" onClick={() => window.location.reload()}>
            Reload
          </Button>
        </div>
      </main>
    );
  }
}
