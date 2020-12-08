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
var Juridico = /** @class */ (function (_super) {
    __extends(Juridico, _super);
    function Juridico(nome, login, senha, email, cnpj) {
        var _this = _super.call(this, nome, login, senha, email) || this;
        _this._cnpj = cnpj;
        return _this;
    }
    Object.defineProperty(Juridico.prototype, "cnpj", {
        /**
         * Getter cnpj
         * @return {string}
         */
        get: function () {
            return this._cnpj;
        },
        /**
         * Setter cnpj
         * @param {string} value
         */
        set: function (value) {
            this._cnpj = value;
        },
        enumerable: false,
        configurable: true
    });
    return Juridico;
}(Cliente_1.Cliente));
