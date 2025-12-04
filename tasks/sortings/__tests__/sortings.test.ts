import {sorters} from "../sorts"
import {arrayCases} from "../__testdata__/arrays";

describe('All sorting algorithms', () => {
    for (const [sortName, sortFn] of Object.entries(sorters)) {
        describe(sortName, () => {
            for (const [caseName, { init, result }] of Object.entries(arrayCases)) {
                test(caseName, () => {
                    const input = [...init]
                    expect(sortFn(input)).toEqual(result)
                })
            }
        })
    }
})
