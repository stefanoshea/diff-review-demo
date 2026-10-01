export type Session = { userId: string; token: string; createdAt: number; refreshedAt: number }

export const SESSION_TTL_MS = 30 * 60 * 1000
export const MAX_SESSION_AGE_MS = 12 * 60 * 60 * 1000

export function createSession(userId: string, now: number): Session {
  return { userId, token: crypto.randomUUID(), createdAt: now, refreshedAt: now }
}

export function isExpired(session: Session, now: number): boolean {
  return now - session.refreshedAt > SESSION_TTL_MS
}

export function refresh(session: Session, now: number): Session {
  if (now - session.createdAt > MAX_SESSION_AGE_MS) return session
  return { ...session, refreshedAt: now }
}
