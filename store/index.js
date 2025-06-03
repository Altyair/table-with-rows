const { CreateInitDataService } = require("../services");

const INIT_DATA = CreateInitDataService.createData(1000000);

const store =  {
    filter: {
        name: null,
        searchParameters: {
            itemsPerPage: 20,
            orderAsc: true,
            orderBy: "name",
            page: 1,
        },
        allSelected: false,
    },
    data: Object.freeze(INIT_DATA),
    filteredData: structuredClone(INIT_DATA),
}

module.exports = store;
