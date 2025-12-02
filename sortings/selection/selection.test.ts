import selectionSort from "./selection"

describe('selectionSort', () => {
    test('keeps duplicates', () => {
        expect(selectionSort([29, 10, 14, 37, 14])).toEqual([10, 14, 14, 29, 37])
    })
})
