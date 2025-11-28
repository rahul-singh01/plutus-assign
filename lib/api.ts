export async function fetchCoins(currency: string = "usd") {
    try {
        const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
            {
                next: {
                    tags: ["coins"],
                    revalidate: 3600,
                },
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch coins");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching coins:", error);
        throw error;
    }
}
