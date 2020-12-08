"use strict";
exports.__esModule = true;
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto($nome, $valor, $produtoId, $qtd, $qtdMedia, $qtdMinima) {
        this.nome = $nome;
        this.valor = $valor;
        this.produtoId = $produtoId;
        this.qtd = $qtd;
        this.qtdMedia = $qtdMedia;
        this.qtdMinima = $qtdMinima;
    }
    /**
     * Getter $nome
     * @return {string}
     */
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    /**
     * Getter $valor
     * @return {number}
     */
    Produto.prototype.getValor = function () {
        return this.valor;
    };
    /**
     * Getter $produtoId
     * @return {number}
     */
    Produto.prototype.getProdutoId = function () {
        return this.produtoId;
    };
    /**
     * Getter $qtd
     * @return {number}
     */
    Produto.prototype.getQtd = function () {
        return this.qtd;
    };
    /**
     * Getter $qtdMedia
     * @return {number}
     */
    Produto.prototype.getQtdMedia = function () {
        return this.qtdMedia;
    };
    /**
     * Getter $qtdMinima
     * @return {number}
     */
    Produto.prototype.getQtdMinima = function () {
        return this.qtdMinima;
    };
    /**
     * Setter $nome
     * @param {string} value
     */
    Produto.prototype.setNome = function (value) {
        this.nome = value;
    };
    /**
     * Setter $valor
     * @param {number} value
     */
    Produto.prototype.setValor = function (value) {
        this.valor = value;
    };
    /**
     * Setter $produtoId
     * @param {number} value
     */
    Produto.prototype.setProdutoId = function (value) {
        this.produtoId = value;
    };
    /**
     * Setter $qtd
     * @param {number} value
     */
    Produto.prototype.setQtd = function (value) {
        this.qtd = value;
    };
    /**
     * Setter $qtdMedia
     * @param {number} value
     */
    Produto.prototype.setQtdMedia = function (value) {
        this.qtdMedia = value;
    };
    /**
     * Setter $qtdMinima
     * @param {number} value
     */
    Produto.prototype.setQtdMinima = function (value) {
        this.qtdMinima = value;
    };
    return Produto;
}());
exports.Produto = Produto;
