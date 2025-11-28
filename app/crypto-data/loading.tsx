export default function Loading() {
    return (
        <main className="min-h-screen bg-background text-white pb-20">
            <div className="container mx-auto px-4 md:px-12 lg:px-20 pt-32">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="h-12 bg-[#0a1f35] rounded w-64 animate-pulse"></div>
                    <div className="h-12 bg-[#0a1f35] rounded w-full md:w-96 animate-pulse"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-[#0a1f35] rounded-2xl p-6 border border-gray-800 animate-pulse h-64"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                                <div className="flex-1">
                                    <div className="h-4 bg-gray-700 rounded w-24 mb-2"></div>
                                    <div className="h-3 bg-gray-700 rounded w-12"></div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="h-8 bg-gray-700 rounded w-32"></div>
                                <div className="h-4 bg-gray-700 rounded w-full"></div>
                                <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
