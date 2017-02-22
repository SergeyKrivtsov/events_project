// фильтр по типу события
app.filter('typeFilter', function () {
    return function (items, typeToSort) {
        var result = [];

        if (typeToSort === undefined || typeToSort == '')
            return items;

        for (var i = 0; i < items.length; i++)
            for (var j = 0; j < typeToSort.length; j++)
                if (items[i].type === typeToSort[j])
                    result.push(items[i]);

        return result;

    }

})

// фильтр по дате
app.filter('dateFilter', function () {
    return function (items, from, to) {
        var result = [];
        if (from === undefined && to === undefined || from === null && to === null)
            return items;
        else if (from !== undefined && to !== undefined) {
            for (var i = 0; i < items.length; i++) {
                if (new Date(items[i].date) >= from && new Date(items[i].date) <= to)
                    result.push(items[i]);
            }
            return result;
        }
        else if (from !== undefined && to === undefined) {
            for (var i = 0; i < items.length; i++) {
                if (new Date(items[i].date) >= from)
                    result.push(items[i]);
            }
            return result;
        }
        else if (from === undefined && to !== undefined) {
            for (var i = 0; i < items.length; i++) {
                if (new Date(items[i].date) <= to)
                    result.push(items[i]);
            }
            return result;
        }


    }
})
