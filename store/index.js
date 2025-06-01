const { CreateInitDataService } = require("../services");

const INIT_DATA = CreateInitDataService.createData(500);

const store =  {
    filter: {
        name: null,
        searchParameters: {
            itemsPerPage: 20,
            orderAsc: true,
            orderBy: "name",
            page: 1,
        },
    },
    data: Object.freeze(INIT_DATA),
    filteredData: structuredClone(INIT_DATA),
    selectedItems: [],
}

module.exports = store;
