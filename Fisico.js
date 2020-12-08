"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Cliente_1 = require("./Cliente");
var Fisico = /** @class */ (function (_super) {
    __extends(Fisico, _super);
    function Fisico(nome, login, senha, email, cpf, rg, genero) {
        var _this = _super.call(this, nome, login, senha, email) || this;
        _this._cpf = cpf;
        _this._rg = rg;
        _this._genero = genero;
        return _this;
    }
    /**
     * Getter cpf
     * @return {string}
     */
    Fisico.prototype.getCpf = function () {
        return this._cpf;
    };
    /**
     * Getter rg
     * @return {string}
     */
    Fisico.prototype.getRg = function () {
        return this._rg;
    };
    /**
     * Getter genero
     * @return {string}
     */
    Fisico.prototype.getGenero = function () {
        return this._genero;
    };
    /**
     * Setter cpf
     * @param {string} value
     */
    Fisico.prototype.setCpf = function (value) {
        this._cpf = value;
    };
    /**
     * Setter rg
     * @param {string} value
     */
    Fisico.prototype.setRg = function (value) {
        this._rg = value;
    };
    /**
     * Setter genero
     * @param {string} value
     */
    Fisico.prototype.setGenero = function (value) {
        this._genero = value;
    };
    return Fisico;
}(Cliente_1.Cliente));
