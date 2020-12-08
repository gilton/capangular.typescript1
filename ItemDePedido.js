"use strict";
exports.__esModule = true;
exports.ItemDePedido = void 0;
var ItemDePedido = /** @class */ (function () {
    function ItemDePedido($itemDePedidoId, $qtdProduto, $valor) {
        this.itemDePedidoId = $itemDePedidoId;
        this.qtdProduto = $qtdProduto;
        this.valor = $valor;
    }
    /**
     * Getter $itemDePedidoId
     * @return {number}
     */
    ItemDePedido.prototype.getItemDePedidoId = function () {
        return this.itemDePedidoId;
    };
    /**
     * Getter $qtdProduto
     * @return {number}
     */
    ItemDePedido.prototype.getQtdProduto = function () {
        return this.qtdProduto;
    };
    /**
     * Getter $valor
     * @return {number}
     */
    ItemDePedido.prototype.getValor = function () {
        return this.valor;
    };
    /**
     * Setter $itemDePedidoId
     * @param {number} value
     */
    ItemDePedido.prototype.setItemDePedidoId = function (value) {
        this.itemDePedidoId = value;
    };
    /**
     * Setter $qtdProduto
     * @param {number} value
     */
    ItemDePedido.prototype.setQtdProduto = function (value) {
        this.qtdProduto = value;
    };
    /**
     * Setter $valor
     * @param {number} value
     */
    ItemDePedido.prototype.setValor = function (value) {
        this.valor = value;
    };
    return ItemDePedido;
}());
exports.ItemDePedido = ItemDePedido;
