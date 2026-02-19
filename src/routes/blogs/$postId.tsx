import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { type Post, postQueryOptions } from '../../api/posts'

export const Route = createFileRoute('/blogs/$postId')({
    loader: ({ context, params: { postId } }) =>
        context.queryClient.ensureQueryData(postQueryOptions(postId)),
    component: BlogDetail,
})

function BlogDetail() {
    const { postId } = Route.useParams()
    const { data: post, isPending } = useQuery<Post>(postQueryOptions(postId))

    if (isPending) return <div className="text-center p-20 text-white">Loading post...</div>
    if (!post) return <div className="text-center p-20 text-red-400">Post not found</div>

    return (
        <article className="max-w-4xl mx-auto py-12 px-6">
            <Link
                to="/blogs"
                search={{ q: '' }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-8 group"
            >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                Back to blog list
            </Link>

            <header className="space-y-8 mb-12 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <span className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded">
                        Story
                    </span>
                    <time className="text-sm font-medium text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-black tracking-tight leading-[1.1]">
                    {post.title}
                </h1>

                <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">
                        {post.author[0]}
                    </div>
                    <div className="text-left">
                        <p className="text-sm font-bold text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500 font-medium">Author & Contributor</p>
                    </div>
                </div>
            </header>

            <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl mb-12">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="max-w-2xl mx-auto">
                <div className="prose prose-lg md:prose-xl prose-slate !max-w-none">
                    {post.content.split('\n').filter(Boolean).map((para) => (
                        <p key={para} className="text-gray-700 leading-relaxed mb-6 font-medium text-lg opacity-90">
                            {para}
                        </p>
                    ))}
                </div>
            </div>
        </article>
    )
}
