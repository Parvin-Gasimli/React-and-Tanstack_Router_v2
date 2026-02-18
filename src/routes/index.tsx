import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className="relative py-20 overflow-hidden flex flex-col items-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -z-10" />

            <div className="max-w-3xl text-center space-y-8 px-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-widest shadow-xl animate-bounce">
                    New Update Tanstack and Prefetch Route
                </div>

                <h1 className="text-5xl md:text-8xl font-black text-black tracking-tighter leading-[0.9]">
                    Build <span className="text-blue-600">Faster</span>.<br />
                    Stay <span className="underline decoration-blue-500/30">Safe</span>.
                </h1>

                <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-xl mx-auto">
                    Experience the next generation of routing with TanStack, MSW, and Tailwind 4.
                    Built for performance, typed for perfection.
                </p>




            </div>
        </div>
    )
}
