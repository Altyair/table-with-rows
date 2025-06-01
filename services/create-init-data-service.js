const CreateInitDataService = {
    generateRandomString: (length) => {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzАБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЬЪЭЮЯабвгдежзиклмнопрстуфхцчшщьъэяю0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            result += charset[randomIndex];
        }
        return result;
    },

    createData: function (countItems) {
        const items = [];
        for (let i = 1; i <= countItems; i++) {
            items.push({
                id: i,
                name: this.generateRandomString(10),
            })
        }
        return {
            items,
            itemsCount: items.length,
        }
    }
};

module.exports = CreateInitDataService;
