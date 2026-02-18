import { http, HttpResponse, delay } from 'msw'

interface Post {
    id: string
    title: string
    content: string
    author: string
    createdAt: string
    image: string
}

let posts: Post[] = [
    {
        id: '1',
        title: 'Getting Started with TanStack Router',
        content: 'Learning TanStack Router is easy and fun! Built-in type safety and prefetching make it a dream for developers.',
        author: 'John Doe',
        createdAt: new Date().toISOString(),
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop'
    },
    {
        id: '2',
        title: 'Mastering MSW in 2024',
        content: 'Mocking APIs makes development much faster. Learn how to simulate real-world scenarios with delay and error handling.',
        author: 'Jane Smith',
        createdAt: new Date().toISOString(),
        image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop'
    },
    {
        id: '3',
        title: 'Visual Excellence in Web Design',
        content: 'Modern web apps need to wow users. Explore how to use gradients, blur effects, and premium typography.',
        author: 'Alice Johnson',
        createdAt: new Date().toISOString(),
        image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&auto=format&fit=crop'
    },
]

export const handlers = [
    http.get('/api/users', async () => {
        await delay(1000)
        return HttpResponse.json([
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
            { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
        ])
    }),

    http.get('/api/posts', async ({ request }) => {
        await delay(500)
        const url = new URL(request.url)
        const search = url.searchParams.get('search')?.toLowerCase()

        let filteredPosts = posts
        if (search) {
            filteredPosts = posts.filter(p =>
                p.title.toLowerCase().includes(search) ||
                p.content.toLowerCase().includes(search)
            )
        }

        return HttpResponse.json(filteredPosts)
    }),

    http.get('/api/posts/:id', async ({ params }) => {
        await delay(300)
        const { id } = params
        const post = posts.find(p => p.id === id)
        if (!post) return new HttpResponse(null, { status: 404 })
        return HttpResponse.json(post)
    }),

    http.post('/api/posts', async ({ request }) => {
        await delay(800)
        const newPost = await request.json() as any
        const post: Post = {
            ...newPost,
            id: Math.random().toString(36).substring(7),
            createdAt: new Date().toISOString(),
            image: newPost.image || `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop`
        }
        posts = [post, ...posts]
        return HttpResponse.json(post, { status: 201 })
    }),
]
