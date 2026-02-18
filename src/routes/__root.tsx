import { createRootRouteWithContext, Outlet, useRouterState, Link } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Navbar } from '../components/Navbar'

interface MyRouterContext {
    queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
    notFoundComponent: () => (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-9xl font-black text-gray-100 mb-4 select-none">404</div>
            <h1 className="text-4xl font-black text-black mb-4">Page Not Found</h1>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                The page you are looking for doesn't exist or has been moved to another location.
            </p>
            <Link
                to="/"
                className="px-8 py-3 bg-black text-white rounded-2xl font-black shadow-xl hover:scale-105 transition-transform"
            >
                Go Home
            </Link>
        </div>
    ),
    component: RootComponent,
})

function RootComponent() {
    const isLoading = useRouterState({ select: (s) => s.status === 'pending' })

    return (
        <div className="min-h-screen relative">
            <Navbar />

            {isLoading && (
                <div className="fixed top-0 left-0 w-full h-1 z-[100]">
                    <div className="h-full bg-blue-600 animate-[loading_2s_ease-in-out_infinite]" />
                </div>
            )}

            <main className="pt-28 pb-12 px-6">
                <Outlet />
            </main>

            <TanStackRouterDevtools />
            <ReactQueryDevtools />

            <style>{`
        @keyframes loading {
          0% { width: 0; left: 0; }
          50% { width: 70%; left: 0; }
          100% { width: 0; left: 100%; }
        }
      `}</style>
        </div>
    )
}
