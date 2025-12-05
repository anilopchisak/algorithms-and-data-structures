const insertionBinarySort = (arr: number[]): number[] => {

    function binarySearch(left: number, right: number, arr: number[], target: number): number {
        while (left <= right) {
            const middle = Math.floor((left + right) / 2)
            if (arr[middle] > target)
                right = middle - 1
            else
                left = middle + 1
        }
        return left
    }

    for (let i = 1; i < arr.length; i++) {
        const target = arr[i]
        const pos = binarySearch(0, i - 1, arr, target)
        for (let j = i; j > pos; j--) {
            arr[j] = arr[j - 1]
        }
        arr[pos] = target
    }

    return arr
}

export default insertionBinarySort