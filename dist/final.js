'use strict';

var _dec, _class;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _decofinal = require('./decofinal');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Employee = function () {
    function Employee() {
        _classCallCheck(this, Employee);
    }

    _createClass(Employee, [{
        key: 'addToSchedule',
        value: function addToSchedule() {
            console.log('Employee added to schedule.');
        }
    }, {
        key: 'logTitle',
        value: function logTitle() {
            console.log('Employee has the title ' + this.title + '.');
        }
    }]);

    return Employee;
}();

var Researcher = function () {
    function Researcher() {
        _classCallCheck(this, Researcher);
    }

    _createClass(Researcher, [{
        key: 'doResearch',
        value: function doResearch(topic) {
            console.log('Doing research on ' + topic + '.');
        }
    }]);

    return Researcher;
}();

var UniversityLibrarian = (_dec = (0, _decofinal.sealed)('UniversityLibrarian'), (0, _decofinal.logger)(_class = _dec(_class = function () {
    function UniversityLibrarian(name) {
        _classCallCheck(this, UniversityLibrarian);

        this._name = name;
    }

    _createClass(UniversityLibrarian, [{
        key: 'assistCustomer',
        value: function assistCustomer(custName) {
            console.log(this.name + ' is assisting ' + custName);
        }

        //    @writable(true)

    }, {
        key: 'assistFaculty',
        value: function assistFaculty() {
            console.log('Assisting faculty.');
        }
    }]);

    return UniversityLibrarian;
}()) || _class) || _class);


var instance = new UniversityLibrarian();
console.log('R2');