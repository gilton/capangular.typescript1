"use strict";
exports.__esModule = true;
exports.Fonercedor = void 0;
var Fonercedor = /** @class */ (function () {
    function Fonercedor(nome, cnpj) {
        this._nome = nome;
        this._cnpj = cnpj;
    }
    /**
     * Getter nome
     * @return {string}
     */
    Fonercedor.prototype.getNome = function () {
        return this._nome;
    };
    /**
     * Getter cnpj
     * @return {string}
     */
    Fonercedor.prototype.getCnpj = function () {
        return this._cnpj;
    };
    /**
     * Setter nome
     * @param {string} value
     */
    Fonercedor.prototype.setNome = function (value) {
        this._nome = value;
    };
    /**
     * Setter cnpj
     * @param {string} value
     */
    Fonercedor.prototype.setCnpj = function (value) {
        this._cnpj = value;
    };
    return Fonercedor;
}());
exports.Fonercedor = Fonercedor;
