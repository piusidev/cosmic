/**
 * Merges class names, filtering out falsy values.
 * Lightweight alternative when you don't need full clsx/tailwind-merge.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
