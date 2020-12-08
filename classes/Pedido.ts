import { Endereco } from './Endereco';
import { Produto } from './Produto';


export class Pedido {

    private pedidoId: number;
    private enderecoEntrega: Endereco;
    private valor: number;
    private tarifado: boolean;
    
    private TAXA_ALIQUOTA = 0.08;
    private TAXA_FRETE = 0.15;
    
    private produtos?: Array<Produto>;


	constructor($pedidoId: number, $enderecoEntrega: Endereco, $valor: number, $tarifado: boolean) {
		this.pedidoId = $pedidoId;
		this.enderecoEntrega = $enderecoEntrega;
		this.valor = $valor;
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
     * Setter $tarifado
     * @param {boolean} value
     */
	public setTarifado(value: boolean) {
		this.tarifado = value;
	}


    public calcularVlrTotal(value: boolean): number {
        
    }


}