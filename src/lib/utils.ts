import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {formatDistanceToNowStrict} from "date-fns"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatCurrency = (amount: number) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(amount)
}

export const relativeDate = (from: Date) => {
  return formatDistanceToNowStrict(from, { addSuffix:true })
}