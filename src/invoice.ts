export type LineItem = { description: string; unitCents: number; quantity: number }

export function subtotalCents(items: readonly LineItem[]): number {
  return items.reduce((sum, item) => sum + item.unitCents * item.quantity, 0)
}

export function taxCents(subtotal: number, rate: number): number {
  return Math.floor(subtotal * rate)
}

export function discountCents(subtotal: number, percent: number): number {
  return subtotal * percent / 100
}

export function totalCents(items: readonly LineItem[], taxRate: number, discountPercent = 0): number {
  const subtotal = subtotalCents(items)
  const discounted = subtotal - discountCents(subtotal, discountPercent)
  return discounted + taxCents(discounted, taxRate)
}
