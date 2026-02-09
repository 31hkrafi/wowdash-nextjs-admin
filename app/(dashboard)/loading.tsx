// Server Component - No 'use client' for fastest loading
// This renders on the server without waiting for JavaScript

export default function DashboardLoading() {
    return (
        <div className="space-y-6 animate-pulse">
            {/* Breadcrumb skeleton */}
            <div className="h-6 w-32 bg-neutral-200 dark:bg-slate-700 rounded" />

            {/* Stats cards skeleton - 5 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-32 bg-white dark:bg-slate-700/50 rounded-xl p-4">
                        <div className="h-4 w-20 bg-neutral-200 dark:bg-slate-600 rounded mb-3" />
                        <div className="h-8 w-16 bg-neutral-200 dark:bg-slate-600 rounded mb-2" />
                        <div className="h-3 w-24 bg-neutral-200 dark:bg-slate-600 rounded" />
                    </div>
                ))}
            </div>

            {/* Chart section skeleton */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                {/* Large chart */}
                <div className="xl:col-span-12 2xl:col-span-6 h-80 bg-white dark:bg-slate-700/50 rounded-xl p-4">
                    <div className="h-5 w-32 bg-neutral-200 dark:bg-slate-600 rounded mb-4" />
                    <div className="h-60 bg-neutral-100 dark:bg-slate-600/50 rounded-lg" />
                </div>

                {/* Small charts */}
                <div className="xl:col-span-6 2xl:col-span-3 h-80 bg-white dark:bg-slate-700/50 rounded-xl p-4">
                    <div className="h-5 w-28 bg-neutral-200 dark:bg-slate-600 rounded mb-4" />
                    <div className="h-60 bg-neutral-100 dark:bg-slate-600/50 rounded-lg" />
                </div>
                <div className="xl:col-span-6 2xl:col-span-3 h-80 bg-white dark:bg-slate-700/50 rounded-xl p-4">
                    <div className="h-5 w-28 bg-neutral-200 dark:bg-slate-600 rounded mb-4" />
                    <div className="h-60 bg-neutral-100 dark:bg-slate-600/50 rounded-lg" />
                </div>
            </div>
        </div>
    );
}
