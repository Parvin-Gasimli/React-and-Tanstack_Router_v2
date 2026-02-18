import { createFileRoute } from '@tanstack/react-router'
import { usersQueryOptions } from '../../api/users'
import { UserList } from '../../features/users/components/UserList'

export const Route = createFileRoute('/users/')({
    loader: ({ context }) => context.queryClient.ensureQueryData(usersQueryOptions),
    component: UsersPage,
})

function UsersPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold text-white">Users</h2>
                <p className="text-slate-400">Manage your application users here.</p>
            </div>
            <UserList />
        </div>
    )
}
