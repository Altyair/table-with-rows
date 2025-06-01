const store = require("../store/index");
const { FilterDataService }= require("../services");
const { SortDataService } = require("../services");

const UsersController = {
  search: async (req, res) => {
    const { name, searchParameters } = req.body;

    try {
      //  filter data
      if (name !== store.filter.fullName) {
        store.filter.fullName = name;

        const filteredData = name === null ? store.data.items : FilterDataService.filter(store.data.items,'name', name);
        store.filteredData = { items: filteredData, itemsCount: filteredData.length };
      }

      //  sort data
      if (store.filter.searchParameters.orderBy !== searchParameters.orderBy || store.filter.searchParameters.orderAsc !== searchParameters.orderAsc) {
        store.filter.searchParameters = searchParameters;
        store.filteredData.items = SortDataService.sortByKey(store.filteredData.items, 'name', searchParameters.orderAsc);
      }

      const chunkResult = store.filteredData.items.slice((searchParameters.page - 1) * searchParameters.itemsPerPage, searchParameters.page * searchParameters.itemsPerPage);

      // эмуляция задержки ответа чтобы отобразить loader
      setTimeout(_ => {
        return res.json({
          items: chunkResult,
          itemsCount: store.filteredData.items.length,
        });
      }, 300);
    } catch (error) {
      console.error("Error in search:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  select: async (req, res) => {
    const { index, selected } = req.body;

    try {

      res.json(true);
    } catch (error) {
      console.error("Error in search:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = UsersController;
