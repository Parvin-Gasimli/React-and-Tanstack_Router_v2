import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
    loader: async () => {
        await new Promise(r => setTimeout(r, 1000))
        return {}
    },
    pendingComponent: () => (
        <div className="flex items-center justify-center p-20 animate-pulse">
            <div className="text-xl font-black text-gray-300 tracking-widest uppercase">
                Loading Dashboard...
            </div>
        </div>
    ),
    errorComponent: ({ error }) => (
        <div className="p-10 bg-red-50 border border-red-100 rounded-3xl text-center">
            <h2 className="text-2xl font-black text-red-600 mb-2">Something went wrong!</h2>
            <p className="text-red-400 font-medium">{(error as any).message || 'Unknown error'}</p>
            <button
                onClick={() => window.location.reload()}
                className="mt-6 px-6 py-2 bg-red-600 text-white rounded-xl font-bold"
            >
                Try Again
            </button>
        </div>
    ),
    component: () => (
        <div className="p-10 border-2 border-dashed border-gray-100 rounded-3xl text-center">
            <h2 className="text-2xl font-black text-gray-400">Welcome to your Dashboard</h2>
            <p className="text-gray-400">Select a section from the sidebar to begin.</p>
        </div>
    ),
})
