import { NextRequest, NextResponse } from "next/server";
import { getNewsWithContent } from "@/lib/mock-db";

export const revalidate = 300;
export const dynamicParams = true;

const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const result = getNewsWithContent(slug);

  if (!result) {
    return NextResponse.json({ error: "news-not-found" }, { status: 404, headers: CACHE_HEADERS });
  }

  return NextResponse.json(
    {
      data: result,
      meta: { generatedAt: new Date().toISOString() },
    },
    { headers: CACHE_HEADERS }
  );
}
