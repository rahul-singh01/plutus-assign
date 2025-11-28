import CryptoDashboard from "@/components/CryptoDashboard";
import { AlertCircle } from "lucide-react";
import { fetchCoins } from "@/lib/api";

export default async function CryptoData() {
    let coins = [];
    let error = "";

    try {
        coins = await fetchCoins();
    } catch (err) {
        error = "Failed to load crypto data. Please try again later.";
    }

    return (
        <main className="min-h-screen bg-background text-white selection:bg-primary selection:text-black pb-20">
            <div className="container mx-auto px-4 md:px-12 lg:px-20 pt-32">
                {error ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <AlertCircle className="text-red-500 mb-4" size={48} />
                        <p className="text-xl text-red-400 mb-6">{error}</p>
                    </div>
                ) : (
                    <CryptoDashboard initialCoins={coins} />
                )}
            </div>
        </main>
    );
}
