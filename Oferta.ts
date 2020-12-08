export class Oferta {
    
    private qtd: number;
    private vlrUnitario: number;
    private ofertaId: number;
    private nomProduto: string;


	constructor($qtd: number, $vlrUnitario: number, $ofertaId: number, $nomProduto: string) {
		this.qtd = $qtd;
		this.vlrUnitario = $vlrUnitario;
		this.ofertaId = $ofertaId;
		this.nomProduto = $nomProduto;
	}


    /**
     * Getter $qtd
     * @return {number}
     */
	public getQtd(): number {
		return this.qtd;
	}

    /**
     * Getter $vlrUnitario
     * @return {number}
     */
	public getVlrUnitario(): number {
		return this.vlrUnitario;
	}

    /**
     * Getter $ofertaId
     * @return {number}
     */
	public getOfertaId(): number {
		return this.ofertaId;
	}

    /**
     * Getter $nomProduto
     * @return {string}
     */
	public getNomProduto(): string {
		return this.nomProduto;
	}

    /**
     * Setter $qtd
     * @param {number} value
     */
	public setQtd(value: number) {
		this.qtd = value;
	}

    /**
     * Setter $vlrUnitario
     * @param {number} value
     */
	public setVlrUnitario(value: number) {
		this.vlrUnitario = value;
	}

    /**
     * Setter $ofertaId
     * @param {number} value
     */
	public setOfertaId(value: number) {
		this.ofertaId = value;
	}

    /**
     * Setter $nomProduto
     * @param {string} value
     */
	public setNomProduto(value: string) {
		this.nomProduto = value;
	}


}