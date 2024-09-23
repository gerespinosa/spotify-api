import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatSeconds(seconds: number) {
  const formattedSecondsMinutes = new Date(seconds).getMinutes().toString().padStart(2, '0')
  const formattedSecondsSeconds = new Date(seconds).getSeconds().toString().padStart(2, '0')
  const formattedDuration = ((formattedSecondsMinutes) + ':' + (formattedSecondsSeconds))
  return formattedDuration
}


