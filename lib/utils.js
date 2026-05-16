import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max)
}
