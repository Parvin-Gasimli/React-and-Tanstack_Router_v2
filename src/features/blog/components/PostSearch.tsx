import { useNavigate, useSearch } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export function PostSearch() {
    const search = useSearch({ from: '/blogs/' }) as { q?: string }
    const navigate = useNavigate({ from: '/blogs/' })
    const [value, setValue] = useState(search.q || '')

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate({
                search: (prev: any) => ({ ...prev, q: value || undefined }),
                replace: true,
            })
        }, 300)

        return () => clearTimeout(timer)
    }, [value, navigate])

    return (
        <div className="relative max-w-md w-full">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search blogs..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            {value && (
                <button
                    onClick={() => setValue('')}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-white"
                >
                    ✕
                </button>
            )}
        </div>
    )
}
