const FilterDataService = {
    filter: (data, key, value) => {
        return data.filter(item => item[key].toLowerCase().includes(value.toLowerCase()))
    }
};

module.exports = FilterDataService;
