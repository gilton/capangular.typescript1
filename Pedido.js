"use strict";
exports.__esModule = true;
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido($pedidoId, $enderecoEntrega, $valor, $imposto, $frete, $tarifado) {
        this.pedidoId = $pedidoId;
        this.enderecoEntrega = $enderecoEntrega;
        this.valor = $valor;
        this.imposto = $imposto;
        this.frete = $frete;
        this.tarifado = $tarifado;
    }
    /**
     * Getter $pedidoId
     * @return {number}
     */
    Pedido.prototype.getPedidoId = function () {
        return this.pedidoId;
    };
    /**
     * Getter $enderecoEntrega
     * @return {Endereco}
     */
    Pedido.prototype.getEnderecoEntrega = function () {
        return this.enderecoEntrega;
    };
    /**
     * Getter $valor
     * @return {number}
     */
    Pedido.prototype.getValor = function () {
        return this.valor;
    };
    /**
     * Getter $imposto
     * @return {number}
     */
    Pedido.prototype.getImposto = function () {
        return this.imposto;
    };
    /**
     * Getter $frete
     * @return {number}
     */
    Pedido.prototype.getFrete = function () {
        return this.frete;
    };
    /**
     * Getter $tarifado
     * @return {boolean}
     */
    Pedido.prototype.getTarifado = function () {
        return this.tarifado;
    };
    /**
     * Setter $pedidoId
     * @param {number} value
     */
    Pedido.prototype.setPedidoId = function (value) {
        this.pedidoId = value;
    };
    /**
     * Setter $enderecoEntrega
     * @param {Endereco} value
     */
    Pedido.prototype.setEnderecoEntrega = function (value) {
        this.enderecoEntrega = value;
    };
    /**
     * Setter $valor
     * @param {number} value
     */
    Pedido.prototype.setValor = function (value) {
        this.valor = value;
    };
    /**
     * Setter $imposto
     * @param {number} value
     */
    Pedido.prototype.setImposto = function (value) {
        this.imposto = value;
    };
    /**
     * Setter $frete
     * @param {number} value
     */
    Pedido.prototype.setFrete = function (value) {
        this.frete = value;
    };
    /**
     * Setter $tarifado
     * @param {boolean} value
     */
    Pedido.prototype.setTarifado = function (value) {
        this.tarifado = value;
    };
    return Pedido;
}());
exports.Pedido = Pedido;
