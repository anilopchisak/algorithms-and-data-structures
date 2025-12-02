/*
* Сортировка выбором
*
* Сложность по памяти: O(n^2)
* Сложность по времени: O(n^2)
* Устойчивость:
* */

const selectionSort = (arr: number[]): number[] => {
    let min = 0
    for (let i = 0; i < arr.length; i++) {
        min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}

export default selectionSort