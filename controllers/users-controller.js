const store = require("../store/index");
const { FilterDataService }= require("../services");
const { SortDataService } = require("../services");

const UsersController = {
  search: async (req, res) => {
    const { name, searchParameters } = req.body;

    try {
      //  filter data
      if (name !== store.filter.name) {
        store.filter.name = name;

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
    const { id, selected } = req.body;

    try {
      const user = store.filteredData.items.find(user => user.id === id);
      user.selected = selected;

      res.json(true);
    } catch (error) {
      console.error("Error in search:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  allSelect: async (req, res) => {
    const { selected } = req.body;

    console.log(selected);

    try {
      store.filteredData.items.forEach(user => {
        user.selected = selected;
      })

      res.json(true);
    } catch (error) {
      console.error("Error in search:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = UsersController;
