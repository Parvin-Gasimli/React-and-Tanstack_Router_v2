import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { createPost } from '../../../api/posts'

export function CreatePostForm() {
    const [isOpen, setIsOpen] = useState(false)
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] })
            setIsOpen(false)
        },
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        mutation.mutate({
            title: formData.get('title') as string,
            content: formData.get('content') as string,
            author: formData.get('author') as string,
        })
    }

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 bg-black text-white rounded-lg  transition-all font-semibold"
            >
                Create New Blog
            </button>
        )
    }

    return (
        <div className="p-6  border border-gray-200  rounded-xl space-y-4">
            <h3 className="text-xl font-bold text-white">Create New Post</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Title</label>
                    <input
                        name="title"
                        required
                        className="w-full px-4 py-2  border border-gray-300 rounded-lg text-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Author</label>
                    <input
                        name="author"
                        required
                        className="w-full px-4 py-2  border border-gray-300 rounded-lg text-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Content</label>
                    <textarea
                        name="content"
                        required
                        rows={4}
                        className="w-full px-4 py-2  border border-gray-300 rounded-lg text-white"
                    />
                </div>
                <div className="flex gap-2 justify-end">
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 border border-gray-500 rounded-xl"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={mutation.isPending}
                        className="px-4 py-2 bg-black text-white rounded-lg  disabled:opacity-50"
                    >
                        {mutation.isPending ? 'Creating...' : 'Create Post'}
                    </button>
                </div>
            </form>
        </div>
    )
}
