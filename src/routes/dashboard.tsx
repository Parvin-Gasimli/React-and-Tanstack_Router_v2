import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
    component: DashboardLayout,
})

function DashboardLayout() {
    return (
        <div className="flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-64 space-y-2">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4 px-2">Dashboard</h2>
                    <nav className="space-y-1">
                        <Link
                            to="/dashboard/stats"
                            className="block px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-white hover:shadow-sm transition-all [&.active]:bg-black [&.active]:text-white"
                        >
                            📊 Statistics
                        </Link>
                        <Link
                            to="/dashboard/settings"
                            className="block px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-white hover:shadow-sm transition-all [&.active]:bg-black [&.active]:text-white"
                        >
                            ⚙️ Settings
                        </Link>
                    </nav>
                </div>
            </aside>

            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    )
}
