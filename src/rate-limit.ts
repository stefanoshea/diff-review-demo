export class RateLimiter {
  private requests = new Map<string, number[]>()

  constructor(private readonly limit: number, private readonly windowMs: number) {}

  allow(key: string, now: number): boolean {
    const recent = (this.requests.get(key) ?? []).filter(t => now - t < this.windowMs)
    if (recent.length >= this.limit) return false
    recent.push(now)
    this.requests.set(key, recent)
    return true
  }
}
