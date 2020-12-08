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
    Cliente.prototype.getNome = function () {
        return this._nome;
    };
    /**
     * Getter login
     * @return {string}
     */
    Cliente.prototype.getLogin = function () {
        return this._login;
    };
    /**
     * Getter senha
     * @return {string}
     */
    Cliente.prototype.getSenha = function () {
        return this._senha;
    };
    /**
     * Getter email
     * @return {string}
     */
    Cliente.prototype.getEmail = function () {
        return this._email;
    };
    /**
     * Setter nome
     * @param {string} value
     */
    Cliente.prototype.setNome = function (value) {
        this._nome = value;
    };
    /**
     * Setter login
     * @param {string} value
     */
    Cliente.prototype.setLogin = function (value) {
        this._login = value;
    };
    /**
     * Setter senha
     * @param {string} value
     */
    Cliente.prototype.setSenha = function (value) {
        this._senha = value;
    };
    /**
     * Setter email
     * @param {string} value
     */
    Cliente.prototype.setEmail = function (value) {
        this._email = value;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
