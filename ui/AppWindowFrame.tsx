/*
 * Copyright (c) 2026 VinVel
 *
 * SPDX-License-Identifier: MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Maximize, Minus, X } from "lucide-react";
import { useEffect, type MouseEvent, type ReactNode } from "react";
import { classNames } from "./classNames";
import {
  createFallbackWindowController,
  type WindowController,
} from "./windowController";

type AppWindowFrameProps = {
  children: ReactNode;
  iconSrc?: string;
  titlebarLabel?: string;
  windowController?: WindowController;
};

const defaultWindowController = createFallbackWindowController();

function isWindowControlTarget(target: EventTarget | null): boolean {
  return target instanceof Element && target.closest("button") !== null;
}

export function AppWindowFrame({
  children,
  iconSrc,
  titlebarLabel = "Application window controls",
  windowController = defaultWindowController,
}: AppWindowFrameProps) {
  const shouldShowCustomTitlebar = windowController.isDesktopPlatform();

  useEffect(() => {
    function suppressNativeContextMenu(event: Event) {
      event.preventDefault();
    }

    window.addEventListener("contextmenu", suppressNativeContextMenu, true);

    return () =>
      window.removeEventListener(
        "contextmenu",
        suppressNativeContextMenu,
        true,
      );
  }, []);

  function handleTitlebarMouseDown(event: MouseEvent<HTMLElement>) {
    if (event.button !== 0 || isWindowControlTarget(event.target)) {
      return;
    }

    if (event.detail === 2) {
      void windowController.toggleMaximize();
      return;
    }

    void windowController.startDragging();
  }

  if (!shouldShowCustomTitlebar) {
    return <>{children}</>;
  }

  return (
    <div className="ui-window-frame">
      <header
        className={classNames(
          "ui-window-titlebar",
          !iconSrc && "ui-window-titlebar--without-brand",
        )}
        aria-label={titlebarLabel}
        onMouseDown={handleTitlebarMouseDown}
      >
        {iconSrc ? (
          <div className="ui-window-titlebar-brand">
            <img
              alt=""
              className="ui-window-titlebar-icon"
              draggable="false"
              src={iconSrc}
            />
          </div>
        ) : null}
        <div className="ui-window-titlebar-drag-region" />
        <div className="ui-window-titlebar-controls">
          <button
            aria-label="Minimize window"
            className="ui-window-titlebar-button"
            type="button"
            onClick={() => void windowController.minimize()}
          >
            <Minus aria-hidden="true" />
          </button>
          <button
            aria-label="Maximize window"
            className="ui-window-titlebar-button"
            type="button"
            onClick={() => void windowController.toggleMaximize()}
          >
            <Maximize aria-hidden="true" />
          </button>
          <button
            aria-label="Close window"
            className="ui-window-titlebar-button ui-window-titlebar-button--close"
            type="button"
            onClick={() => void windowController.close()}
          >
            <X aria-hidden="true" />
          </button>
        </div>
      </header>
      <div className="ui-window-frame-content">{children}</div>
    </div>
  );
}
