import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { postsQueryOptions } from '../../api/posts'
import { PostSearch } from '../../features/blog/components/PostSearch'
import { CreatePostForm } from '../../features/blog/components/CreatePostForm'

export const Route = createFileRoute('/blogs/')({
    validateSearch: (search: Record<string, unknown>) => {
        return {
            q: (search.q as string) || '',
        }
    },
    loaderDeps: ({ search: { q } }) => ({ q }),
    loader: ({ context, deps: { q } }) =>
        context.queryClient.ensureQueryData(postsQueryOptions(q)),
    component: BlogsPage,
})

function BlogsPage() {
    const { q } = Route.useSearch()
    const { data: posts } = useQuery(postsQueryOptions(q))

    return (
        <div className="max-w-4xl mx-auto space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <h1 className="text-4xl font-bold text-white">Blogs</h1>
                <PostSearch />
            </div>

            <CreatePostForm />

            <div className="grid gap-8 sm:grid-cols-2">
                {posts?.map((post) => (
                    <Link
                        key={post.id}
                        to="/blogs/$postId"
                        params={{ postId: post.id }}
                        search={{ q: q }}
                        className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                        <div className="aspect-video w-full overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded uppercase tracking-wider">
                                    Article
                                </span>
                                <span className="text-[11px] text-gray-400">
                                    {new Date(post.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2">
                                {post.title}
                            </h2>
                            <p className="text-gray-500 text-sm line-clamp-3 mb-6 flex-1">
                                {post.content}
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold">
                                        {post.author[0]}
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">{post.author}</span>
                                </div>
                                <span className="text-blue-600 font-bold text-sm flex items-center gap-1">
                                    Read <span>→</span>
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            {posts?.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No blogs found matching "{q}"
                </div>
            )}
        </div>
    )
}
