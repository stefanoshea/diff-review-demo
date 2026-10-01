import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createSession, isExpired, SESSION_TTL_MS } from '../src/session.ts'

test('a new session is not expired', () => {
  const s = createSession('u1', 0)
  assert.equal(isExpired(s, 1000), false)
})

test('a session expires after the TTL', () => {
  const s = createSession('u1', 0)
  assert.equal(isExpired(s, SESSION_TTL_MS + 1), true)
})
