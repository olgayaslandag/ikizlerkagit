import { NextResponse } from "next/server";
import { FEATURED_SLUGS, listServices } from "@/lib/mock-db";

export const revalidate = 3600;

const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
};

export async function GET() {
  const data = listServices();
  return NextResponse.json(
    {
      data,
      meta: {
        total: data.length,
        generatedAt: new Date().toISOString(),
        featuredSlugs: FEATURED_SLUGS,
      },
    },
    { headers: CACHE_HEADERS }
  );
}
