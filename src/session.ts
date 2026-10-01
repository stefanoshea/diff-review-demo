export type Session = { userId: string; token: string; createdAt: number }

export const SESSION_TTL_MS = 24 * 60 * 60 * 1000

export function createSession(userId: string, now: number): Session {
  return { userId, token: crypto.randomUUID(), createdAt: now }
}

export function isExpired(session: Session, now: number): boolean {
  return now - session.createdAt > SESSION_TTL_MS
}
