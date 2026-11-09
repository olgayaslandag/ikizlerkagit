import { NextResponse } from "next/server";
import { addContactMessage } from "@/lib/mock-db";

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const rateMap = new Map<string, number[]>();

function getClientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const hits = (rateMap.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (hits.length >= RATE_LIMIT) {
    rateMap.set(ip, hits);
    return false;
  }
  hits.push(now);
  rateMap.set(ip, hits);
  return true;
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  let body: Record<string, unknown> | null = null;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Geçersiz istek gövdesi." }, { status: 400 });
  }

  const ad = String(body?.ad ?? "").trim();
  const eposta = String(body?.eposta ?? "").trim();
  const mesaj = String(body?.mesaj ?? "").trim();
  const website = String(body?.website ?? "").trim(); // honeypot

  // Honeypot: bot ise sessizce başarı dön
  if (website) {
    return NextResponse.json(
      { data: { id: "honeypot", receivedAt: new Date().toISOString() }, meta: { generatedAt: new Date().toISOString() } },
      { status: 200 }
    );
  }

  // Doğrulama
  if (ad.length < 2 || ad.length > 80) {
    return NextResponse.json({ error: "Ad Soyad 2–80 karakter olmalıdır." }, { status: 400 });
  }
  if (!isValidEmail(eposta)) {
    return NextResponse.json({ error: "Geçerli bir e-posta adresi giriniz." }, { status: 400 });
  }
  if (mesaj.length < 10 || mesaj.length > 2000) {
    return NextResponse.json({ error: "Mesaj 10–2000 karakter olmalıdır." }, { status: 400 });
  }

  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Çok fazla istek gönderdiniz. Lütfen daha sonra tekrar deneyin." }, { status: 429 });
  }

  const msg = addContactMessage({ ad, eposta, mesaj, ip });
  return NextResponse.json(
    { data: { id: msg.id, receivedAt: msg.receivedAt }, meta: { generatedAt: new Date().toISOString() } },
    { status: 201 }
  );
}

export const dynamic = "force-dynamic";