"use client";

import { useState } from "react";
import { Search, TrendingUp, TrendingDown, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface Coin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    price_change_percentage_24h: number;
}

interface CryptoDashboardProps {
    initialCoins: Coin[];
}

export default function CryptoDashboard({ initialCoins }: CryptoDashboardProps) {
    const [coins, setCoins] = useState(initialCoins);
    const [search, setSearch] = useState("");
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [currency, setCurrency] = useState("usd");

    const currencySymbols: Record<string, string> = {
        usd: "$",
        eur: "€",
        inr: "₹",
    };

    const refreshData = async (newCurrency?: string) => {
        setIsRefreshing(true);
        const targetCurrency = newCurrency || currency;
        try {
            const response = await fetch(`/api/coins?currency=${targetCurrency}`);
            if (!response.ok) throw new Error("Failed to fetch");
            const data = await response.json();
            setCoins(data);
            toast.success("Crypto data updated successfully");
        } catch (error) {
            console.error("Failed to refresh data:", error);
            toast.error("Failed to update crypto data");
        } finally {
            setIsRefreshing(false);
        }
    };

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newCurrency = e.target.value;
        setCurrency(newCurrency);
        refreshData(newCurrency);
    };

    const filteredCoins = coins.filter(
        (coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                <div className="flex items-center gap-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-center md:text-left">
                        Market <span className="text-primary">Data</span>
                    </h1>
                    <button
                        onClick={() => refreshData()}
                        disabled={isRefreshing}
                        className="p-3 rounded-full bg-[#0a1f35] border border-gray-700 hover:border-primary text-white transition-all disabled:opacity-50 group"
                        title="Refresh Data"
                    >
                        <RefreshCw
                            size={20}
                            className={`text-gray-400 group-hover:text-primary transition-colors ${isRefreshing ? "animate-spin text-primary" : ""}`}
                        />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                    <select
                        value={currency}
                        onChange={handleCurrencyChange}
                        className="bg-[#0a1f35] border border-gray-700 rounded-full py-3 px-6 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer hover:border-gray-500"
                    >
                        <option value="usd">USD ($)</option>
                        <option value="eur">EUR (€)</option>
                        <option value="inr">INR (₹)</option>
                    </select>

                    <div className="relative w-full md:w-80">
                        <Search
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={20}
                        />
                        <input
                            type="text"
                            placeholder="Search coins..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-[#0a1f35] border border-gray-700 rounded-full py-3 pl-12 pr-6 text-white focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                </div>
            </div>

            {filteredCoins.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-gray-400 text-xl">
                        No coins found matching "{search}"
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredCoins.map((coin, index) => (
                        <motion.div
                            key={coin.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-[#0a1f35] rounded-2xl p-6 border border-gray-800 hover:border-primary/50 transition-colors group"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <img src={coin.image} alt={coin.name} className="w-10 h-10" />
                                    <div>
                                        <h3 className="font-bold text-lg">{coin.name}</h3>
                                        <span className="text-gray-400 text-sm uppercase">
                                            {coin.symbol}
                                        </span>
                                    </div>
                                </div>
                                <span className="bg-background text-gray-300 text-xs font-bold px-2 py-1 rounded">
                                    #{index + 1}
                                </span>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Price</p>
                                    <p className="text-2xl font-bold">
                                        {currencySymbols[currency]}{coin.current_price.toLocaleString()}
                                    </p>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Market Cap</p>
                                        <p className="text-sm font-medium text-gray-300">
                                            {currencySymbols[currency]}{(coin.market_cap / 1000000000).toFixed(2)}B
                                        </p>
                                    </div>
                                    <div
                                        className={`flex items-center gap-1 text-sm font-bold ${coin.price_change_percentage_24h >= 0
                                            ? "text-green-400"
                                            : "text-red-400"
                                            }`}
                                    >
                                        {coin.price_change_percentage_24h >= 0 ? (
                                            <TrendingUp size={16} />
                                        ) : (
                                            <TrendingDown size={16} />
                                        )}
                                        {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </>
    );
}
