import { NextResponse } from "next/server";
import { fetchCoins } from "@/lib/api";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const currency = searchParams.get("currency") || "usd";

    try {
        const data = await fetchCoins(currency);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch coin data" },
            { status: 500 }
        );
    }
}
