const insertionSort = (arr: number[]): number[] => {
    for (let i = 0; i < arr.length - 1; i++) {
        let j = i + 1
        while (j > 0) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            }
            j--
        }
    }
    return arr
}

export default insertionSort