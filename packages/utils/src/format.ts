/**
 * Formats a number as a locale string with optional options.
 */
export function formatNumber(
  value: number,
  options?: Intl.NumberFormatOptions,
  locale = "pt-BR",
): string {
  return new Intl.NumberFormat(locale, options).format(value);
}

/**
 * Formats a date as a locale string with optional options.
 */
export function formatDate(
  value: Date | string | number,
  options?: Intl.DateTimeFormatOptions,
  locale = "pt-BR",
): string {
  return new Intl.DateTimeFormat(locale, options).format(new Date(value));
}
