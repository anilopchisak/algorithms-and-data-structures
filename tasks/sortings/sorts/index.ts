import selectionSort from "./selection"
import bubbleSort from "./bubble"
import insertionSort from "./insertion"

export const sorters = {
    bubbleSort,
    selectionSort,
    insertionSort,
} as const
