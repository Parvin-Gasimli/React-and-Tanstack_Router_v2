export interface Post {
    id: string
    title: string
    content: string
    author: string
    createdAt: string
    image: string
}

interface CreatePostInput {
    title: string
    content: string
    author: string
}

async function getPosts(search?: string): Promise<Post[]> {
    const url = new URL('/api/posts', window.location.origin)
    if (search) url.searchParams.set('search', search)

    const res = await fetch(url.toString())
    if (!res.ok) throw new Error('Failed to fetch posts')
    return res.json()
}

async function getPost(id: string): Promise<Post> {
    const res = await fetch(`/api/posts/${id}`)
    if (!res.ok) throw new Error('Failed to fetch post')
    return res.json()
}

export async function createPost(input: CreatePostInput): Promise<Post> {
    const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
    })
    if (!res.ok) throw new Error('Failed to create post')
    return res.json()
}

export const postsQueryOptions = (search?: string) => ({
    queryKey: ['posts', { search }],
    queryFn: () => getPosts(search),
})

export const postQueryOptions = (id: string) => ({
    queryKey: ['posts', id],
    queryFn: () => getPost(id),
})
