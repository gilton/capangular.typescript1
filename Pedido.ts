import { Endereco } from './Endereco';
export class Pedido {

    private pedidoId: number;
    private enderecoEntrega: Endereco;
    private valor: number;
    private imposto: number;
    private frete: number;
    private tarifado: boolean;

	constructor($pedidoId: number, $enderecoEntrega: Endereco, $valor: number, $imposto: number, $frete: number, $tarifado: boolean) {
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
	public getPedidoId(): number {
		return this.pedidoId;
	}

    /**
     * Getter $enderecoEntrega
     * @return {Endereco}
     */
	public getEnderecoEntrega(): Endereco {
		return this.enderecoEntrega;
	}

    /**
     * Getter $valor
     * @return {number}
     */
	public getValor(): number {
		return this.valor;
	}

    /**
     * Getter $imposto
     * @return {number}
     */
	public getImposto(): number {
		return this.imposto;
	}

    /**
     * Getter $frete
     * @return {number}
     */
	public getFrete(): number {
		return this.frete;
	}

    /**
     * Getter $tarifado
     * @return {boolean}
     */
	public getTarifado(): boolean {
		return this.tarifado;
	}

    /**
     * Setter $pedidoId
     * @param {number} value
     */
	public setPedidoId(value: number) {
		this.pedidoId = value;
	}

    /**
     * Setter $enderecoEntrega
     * @param {Endereco} value
     */
	public setEnderecoEntrega(value: Endereco) {
		this.enderecoEntrega = value;
	}

    /**
     * Setter $valor
     * @param {number} value
     */
	public setValor(value: number) {
		this.valor = value;
	}

    /**
     * Setter $imposto
     * @param {number} value
     */
	public setImposto(value: number) {
		this.imposto = value;
	}

    /**
     * Setter $frete
     * @param {number} value
     */
	public setFrete(value: number) {
		this.frete = value;
	}

    /**
     * Setter $tarifado
     * @param {boolean} value
     */
	public setTarifado(value: boolean) {
		this.tarifado = value;
	}


    public ehTarifadoOFrete(value: boolean): number {
        if( value == true ) {
            this.imposto = 0.15;
            return this.valor + (this.valor * this.imposto) + this.frete;
        }
        else return this.valor + this.frete;
    }


}