// Lightweight loading skeleton - no external imports for faster load
export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                {/* Simple CSS spinner - no JS needed */}
                <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                <p className="text-muted-foreground text-sm font-medium">Loading...</p>
            </div>
        </div>
    );
}
