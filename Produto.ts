export class Produto {

    private nome: string;
    private valor: number;
    private produtoId: number;
    private qtd: number;
    private qtdMedia: number;
    private qtdMinima: number;


	constructor($nome: string, $valor: number, $produtoId: number, $qtd: number, $qtdMedia: number, $qtdMinima: number) {
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
	public getNome(): string {
		return this.nome;
	}

    /**
     * Getter $valor
     * @return {number}
     */
	public getValor(): number {
		return this.valor;
	}

    /**
     * Getter $produtoId
     * @return {number}
     */
	public getProdutoId(): number {
		return this.produtoId;
	}

    /**
     * Getter $qtd
     * @return {number}
     */
	public getQtd(): number {
		return this.qtd;
	}

    /**
     * Getter $qtdMedia
     * @return {number}
     */
	public getQtdMedia(): number {
		return this.qtdMedia;
	}

    /**
     * Getter $qtdMinima
     * @return {number}
     */
	public getQtdMinima(): number {
		return this.qtdMinima;
	}

    /**
     * Setter $nome
     * @param {string} value
     */
	public setNome(value: string) {
		this.nome = value;
	}

    /**
     * Setter $valor
     * @param {number} value
     */
	public setValor(value: number) {
		this.valor = value;
	}

    /**
     * Setter $produtoId
     * @param {number} value
     */
	public setProdutoId(value: number) {
		this.produtoId = value;
	}

    /**
     * Setter $qtd
     * @param {number} value
     */
	public setQtd(value: number) {
		this.qtd = value;
	}

    /**
     * Setter $qtdMedia
     * @param {number} value
     */
	public setQtdMedia(value: number) {
		this.qtdMedia = value;
	}

    /**
     * Setter $qtdMinima
     * @param {number} value
     */
	public setQtdMinima(value: number) {
		this.qtdMinima = value;
	}


}