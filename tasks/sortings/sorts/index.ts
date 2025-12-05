import selectionSort from "./selection"
import bubbleSort from "./bubble"
import insertionSort from "./insertion"
import insertionBinarySort from "./insertion-binary"

export const sorters = {
    bubbleSort,
    selectionSort,
    insertionSort,
    insertionBinarySort,
} as const
