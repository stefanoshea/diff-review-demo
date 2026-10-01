export type LineItem = { description: string; unitCents: number; quantity: number }

export function subtotalCents(items: readonly LineItem[]): number {
  return items.reduce((sum, item) => sum + item.unitCents * item.quantity, 0)
}

export function taxCents(subtotal: number, rate: number): number {
  return Math.round(subtotal * rate)
}

export function totalCents(items: readonly LineItem[], taxRate: number): number {
  const subtotal = subtotalCents(items)
  return subtotal + taxCents(subtotal, taxRate)
}
