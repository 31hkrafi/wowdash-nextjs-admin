"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export function TopLoader() {
    return (
        <ProgressBar
            height="3px"
            color="hsl(var(--primary))"
            options={{ showSpinner: false }}
            shallowRouting
        />
    );
}
