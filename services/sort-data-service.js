class Comparators {
    static compareInRussian = (c, d) => compareInLowerCase(c, d, new Intl.Collator('ru').compare);
}

function compareInLowerCase(a, b, comparator) {
    if (typeof a === 'string' && typeof b === 'string') {
        a = a.toLowerCase();
        b = b.toLowerCase();
    }
    return comparator(a, b);
}

const SortDataService = {
     sort: (array, selector, orderAsc = true) => {
        return array.sort((a, b) => {
            const v1 = orderAsc ? selector(a) : selector(b);
            const v2 = orderAsc ? selector(b) : selector(a);
            if (v1 === null || v1 === undefined) {
                return 1;
            }
            if (v2 === null || v2 === undefined) {
                return -1;
            }
            if (typeof v1 === 'string' && typeof v2 === 'string') {
                return Comparators.compareInRussian(v1, v2);
            }
            return v1 === v2 ? 0 : v1 < v2 ? -1 : 1;
        });
    },

    sortByKey: (array, key = 'name', orderAsc = true) => {
        return SortDataService.sort(array, (item) => item[key], orderAsc);
    }
}

module.exports = SortDataService;
