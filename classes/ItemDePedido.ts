export class ItemDePedido {

    private itemDePedidoId: number;
    private qtdProduto: number;
    private valor: number;


	constructor($itemDePedidoId: number, $qtdProduto: number, $valor: number) {
		this.itemDePedidoId = $itemDePedidoId;
		this.qtdProduto = $qtdProduto;
		this.valor = $valor;
	}


    /**
     * Getter $itemDePedidoId
     * @return {number}
     */
	public getItemDePedidoId(): number {
		return this.itemDePedidoId;
	}

    /**
     * Getter $qtdProduto
     * @return {number}
     */
	public getQtdProduto(): number {
		return this.qtdProduto;
	}

    /**
     * Getter $valor
     * @return {number}
     */
	public getValor(): number {
		return this.valor;
	}

    /**
     * Setter $itemDePedidoId
     * @param {number} value
     */
	public setItemDePedidoId(value: number) {
		this.itemDePedidoId = value;
	}

    /**
     * Setter $qtdProduto
     * @param {number} value
     */
	public setQtdProduto(value: number) {
		this.qtdProduto = value;
	}

    /**
     * Setter $valor
     * @param {number} value
     */
	public setValor(value: number) {
		this.valor = value;
	}


}