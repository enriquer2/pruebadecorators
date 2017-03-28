class Methods {
    var setData = function (object, data) {
        object.data = data;
    };

    var getData = function (object) {
        return object.data
    };

    var deleteData = function (object) {
        object.data = null;
    };
}