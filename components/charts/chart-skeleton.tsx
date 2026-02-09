"use client";

/**
 * ChartSkeleton - A lightweight placeholder shown while charts are loading
 * Prevents layout shift and provides smooth loading experience
 */
export default function ChartSkeleton({
    height = 254,
    showBars = true
}: {
    height?: number;
    showBars?: boolean;
}) {
    return (
        <div
            className="animate-pulse bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-end justify-around p-4 gap-2"
            style={{ height: `${height}px` }}
        >
            {showBars && (
                <>
                    {/* Animated bar placeholders */}
                    <div className="w-8 bg-neutral-300 dark:bg-slate-500 rounded-t animate-pulse" style={{ height: '40%' }} />
                    <div className="w-8 bg-neutral-300 dark:bg-slate-500 rounded-t animate-pulse" style={{ height: '65%', animationDelay: '100ms' }} />
                    <div className="w-8 bg-neutral-300 dark:bg-slate-500 rounded-t animate-pulse" style={{ height: '45%', animationDelay: '200ms' }} />
                    <div className="w-8 bg-neutral-300 dark:bg-slate-500 rounded-t animate-pulse" style={{ height: '80%', animationDelay: '300ms' }} />
                    <div className="w-8 bg-neutral-300 dark:bg-slate-500 rounded-t animate-pulse" style={{ height: '55%', animationDelay: '400ms' }} />
                    <div className="w-8 bg-neutral-300 dark:bg-slate-500 rounded-t animate-pulse" style={{ height: '70%', animationDelay: '500ms' }} />
                    <div className="w-8 bg-neutral-300 dark:bg-slate-500 rounded-t animate-pulse" style={{ height: '50%', animationDelay: '600ms' }} />
                </>
            )}
        </div>
    );
}
