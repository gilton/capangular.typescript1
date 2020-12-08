"use strict";
exports.__esModule = true;
exports.Oferta = void 0;
var Oferta = /** @class */ (function () {
    function Oferta($qtd, $vlrUnitario, $ofertaId, $nomProduto) {
        this.qtd = $qtd;
        this.vlrUnitario = $vlrUnitario;
        this.ofertaId = $ofertaId;
        this.nomProduto = $nomProduto;
    }
    /**
     * Getter $qtd
     * @return {number}
     */
    Oferta.prototype.getQtd = function () {
        return this.qtd;
    };
    /**
     * Getter $vlrUnitario
     * @return {number}
     */
    Oferta.prototype.getVlrUnitario = function () {
        return this.vlrUnitario;
    };
    /**
     * Getter $ofertaId
     * @return {number}
     */
    Oferta.prototype.getOfertaId = function () {
        return this.ofertaId;
    };
    /**
     * Getter $nomProduto
     * @return {string}
     */
    Oferta.prototype.getNomProduto = function () {
        return this.nomProduto;
    };
    /**
     * Setter $qtd
     * @param {number} value
     */
    Oferta.prototype.setQtd = function (value) {
        this.qtd = value;
    };
    /**
     * Setter $vlrUnitario
     * @param {number} value
     */
    Oferta.prototype.setVlrUnitario = function (value) {
        this.vlrUnitario = value;
    };
    /**
     * Setter $ofertaId
     * @param {number} value
     */
    Oferta.prototype.setOfertaId = function (value) {
        this.ofertaId = value;
    };
    /**
     * Setter $nomProduto
     * @param {string} value
     */
    Oferta.prototype.setNomProduto = function (value) {
        this.nomProduto = value;
    };
    return Oferta;
}());
exports.Oferta = Oferta;
