import { NextResponse } from "next/server";
import { listNews } from "@/lib/mock-db";

export const revalidate = 300;

const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
};

export async function GET() {
  const data = listNews();
  return NextResponse.json(
    {
      data,
      meta: {
        total: data.length,
        generatedAt: new Date().toISOString(),
      },
    },
    { headers: CACHE_HEADERS }
  );
}
