import { NextRequest, NextResponse } from "next/server";
import { getServiceWithContent } from "@/lib/mock-db";

export const revalidate = 3600;
export const dynamicParams = true;

const CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const result = getServiceWithContent(slug);

  if (!result) {
    return NextResponse.json(
      { error: "service-not-found" },
      { status: 404, headers: CACHE_HEADERS }
    );
  }

  return NextResponse.json(
    {
      data: result,
      meta: { generatedAt: new Date().toISOString() },
    },
    { headers: CACHE_HEADERS }
  );
}
