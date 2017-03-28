class Methods {
    setData(object, data) {
        object.data = data;
    };

    getData(object) {
        return object.data
    };

    deleteData(object) {
        object.data = null;
    };
}