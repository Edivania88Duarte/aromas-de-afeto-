export function formatPrice(value: number): string {
  const formatted = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatted.replace('.', ','); 
}
