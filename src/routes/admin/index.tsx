import { createFileRoute, redirect, Link } from '@tanstack/react-router'

const isAuthenticated = false

export const Route = createFileRoute('/admin/')({
    beforeLoad: () => {
        console.log('Admin Guard: Checking auth...')
        if (!isAuthenticated) {
            console.log('Admin Guard: Unauthorized, redirecting...')
            throw redirect({
                to: '/',
                replace: true,
            })
        }
    },
    component: AdminPage,
})

function AdminPage() {
    return (
        <div className="max-w-4xl mx-auto py-20 px-6 text-center space-y-8">
            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-red-200">
                <span className="text-4xl">🔐</span>
            </div>
            <h1 className="text-6xl font-black text-black tracking-tighter">
                Restricted <span className="text-red-600">Area</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium max-w-md mx-auto">
                You have reached a secure administrator zone. This page should only be accessible once authenticated.
            </p>
            <div className="pt-10">
                <Link
                    to="/"
                    className="px-10 py-4 bg-black text-white rounded-2xl font-black text-lg hover:scale-105 transition-transform inline-block"
                >
                    Back to Safety
                </Link>
            </div>
        </div>
    )
}
