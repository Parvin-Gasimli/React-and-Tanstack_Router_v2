import { useQuery } from '@tanstack/react-query'
import { usersQueryOptions } from '../../../api/users'

export function UserList() {
    const { data: users, isPending } = useQuery(usersQueryOptions)

    if (isPending) return <div className="text-center p-10 text-white">Loading users...</div>

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {users?.map((user) => (
                <div
                    key={user.id}
                    className="p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl hover:shadow-gray-200/50 transition-all group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -mr-10 -mt-10 group-hover:bg-blue-50 transition-colors" />

                    <div className="relative">
                        <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">
                            <span className="text-white font-black text-xl">{user.name[0]}</span>
                        </div>

                        <h3 className="text-xl font-black text-gray-900 mb-1">
                            {user.name}
                        </h3>
                        <p className="text-sm font-medium text-gray-400 mb-6">{user.email}</p>

                        <div className="flex items-center gap-4">
                            <div className="h-px flex-1 bg-gray-100" />
                            <button className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-black transition-colors">
                                Profile
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
