export const arrayCases = {
    keepsDuplicates: {
        init: [29, 10, 14, 37, 14],
        result: [10, 14, 14, 29, 37],
    },

    alreadySorted: {
        init: [1, 2, 3, 4, 5],
        result: [1, 2, 3, 4, 5],
    },

    reversed: {
        init: [9, 7, 5, 3, 1],
        result: [1, 3, 5, 7, 9],
    },

    negativeNumbers: {
        init: [3, -1, -7, 2, 0],
        result: [-7, -1, 0, 2, 3],
    },

    single: {
        init: [5],
        result: [5],
    },

    empty: {
        init: [],
        result: [],
    },
} as const;