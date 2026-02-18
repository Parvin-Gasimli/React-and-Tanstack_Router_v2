export interface User {
    id: number
    name: string
    email: string
}

export async function getUsers(): Promise<User[]> {
    const res = await fetch('/api/users')
    if (!res.ok) throw new Error('Failed to fetch users')
    return res.json()
}

export const usersQueryOptions = {
    queryKey: ['users'],
    queryFn: getUsers,
}
