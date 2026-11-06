import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export const dynamic = "force-dynamic";

type RevalidateTag = "news" | "services";

export async function POST(request: NextRequest) {
  let body: { secret?: unknown; tag?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid-json" }, { status: 400 });
  }

  const { secret, tag } = body;

  const expectedSecret = process.env.REVALIDATE_SECRET;
  if (expectedSecret && secret !== expectedSecret) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  if (tag !== "news" && tag !== "services") {
    return NextResponse.json({ error: "invalid-tag" }, { status: 400 });
  }

  revalidateTag(tag as RevalidateTag);

  return NextResponse.json({ revalidated: true, tag, now: Date.now() });
}
