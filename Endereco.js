"use strict";
exports.__esModule = true;
exports.Endereco = void 0;
var Endereco = /** @class */ (function () {
    function Endereco($rua, $numero, $bairro, $cep) {
        this.rua = $rua;
        this.numero = $numero;
        this.bairro = $bairro;
        this.cep = $cep;
    }
    /**
     * Getter $rua
     * @return {   string}
     */
    Endereco.prototype.getRua = function () {
        return this.rua;
    };
    /**
     * Getter $numero
     * @return {string}
     */
    Endereco.prototype.getNumero = function () {
        return this.numero;
    };
    /**
     * Getter $bairro
     * @return {string}
     */
    Endereco.prototype.getBairro = function () {
        return this.bairro;
    };
    /**
     * Getter $cep
     * @return {   string}
     */
    Endereco.prototype.getCep = function () {
        return this.cep;
    };
    /**
     * Setter $rua
     * @param {   string} value
     */
    Endereco.prototype.setRua = function (value) {
        this.rua = value;
    };
    /**
     * Setter $numero
     * @param {string} value
     */
    Endereco.prototype.setNumero = function (value) {
        this.numero = value;
    };
    /**
     * Setter $bairro
     * @param {string} value
     */
    Endereco.prototype.setBairro = function (value) {
        this.bairro = value;
    };
    /**
     * Setter $cep
     * @param {   string} value
     */
    Endereco.prototype.setCep = function (value) {
        this.cep = value;
    };
    return Endereco;
}());
exports.Endereco = Endereco;
