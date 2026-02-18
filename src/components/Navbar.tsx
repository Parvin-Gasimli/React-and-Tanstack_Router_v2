import { Link } from '@tanstack/react-router'

export function Navbar() {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl px-6 py-2 bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-black text-xs">T</span>
                </div>
                <span className="font-black text-black tracking-tighter hidden sm:block">TANSTACK</span>
            </div>

            <div className="flex items-center gap-1">
                {[
                    { to: '/', label: 'Home' },
                    { to: '/users', label: 'Users' },
                    { to: '/blogs', label: 'Blogs', search: { q: '' } },
                    { to: '/dashboard', label: 'Dashboard' },
                    { to: '/admin', label: 'Admin' }
                ].map((item) => (
                    <Link
                        key={item.label}
                        to={item.to}
                        search={(item as any).search}
                        className="px-4 py-2 rounded-xl text-sm font-bold text-gray-500 hover:text-black hover:bg-gray-100/50 transition-all [&.active]:text-blue-600 [&.active]:bg-blue-50"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    )
}
