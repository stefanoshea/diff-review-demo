export class RateLimiter {
  private hits = new Map<string, number[]>()

  constructor(private readonly limit: number, private readonly windowMs: number) {}

  allow(key: string, now: number): boolean {
    const recent = (this.hits.get(key) ?? []).filter(t => now - t < this.windowMs)
    if (recent.length >= this.limit) return false
    recent.push(now)
    this.hits.set(key, recent)
    return true
  }
}
