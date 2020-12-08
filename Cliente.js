"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nome, login, senha, email) {
        this._nome = nome;
        this._login = login;
        this._senha = senha;
        this._email = email;
    }
    Object.defineProperty(Cliente.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        /**
         * Setter nome
         * @param {string} value
         */
        set: function (value) {
            this._nome = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "login", {
        /**
         * Getter login
         * @return {string}
         */
        get: function () {
            return this._login;
        },
        /**
         * Setter login
         * @param {string} value
         */
        set: function (value) {
            this._login = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "senha", {
        /**
         * Getter senha
         * @return {string}
         */
        get: function () {
            return this._senha;
        },
        /**
         * Setter senha
         * @param {string} value
         */
        set: function (value) {
            this._senha = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "email", {
        /**
         * Getter email
         * @return {string}
         */
        get: function () {
            return this._email;
        },
        /**
         * Setter email
         * @param {string} value
         */
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}());
exports.Cliente = Cliente;
