import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/stats')({
    loader: async () => {
        await new Promise(r => setTimeout(r, 800))
        return {
            visitors: 12450,
            conversions: '3.2%',
            revenue: '$45,200',
        }
    },
    component: StatsPage,
})

function StatsPage() {
    const data = Route.useLoaderData()

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-black text-black tracking-tight">System Statistics</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {Object.entries(data).map(([key, value]) => (
                    <div key={key} className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
                        <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{key}</p>
                        <p className="text-2xl font-black text-black">{value}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
