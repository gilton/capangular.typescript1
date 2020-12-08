export class Fonercedor {
    private _nome: string;
    private _cnpj: string;
    

	constructor(nome: string, cnpj: string) {
		this._nome = nome;
		this._cnpj = cnpj;
	}



    /**
     * Getter nome
     * @return {string}
     */
	public getNome(): string {
		return this._nome;
	}

    /**
     * Getter cnpj
     * @return {string}
     */
	public getCnpj(): string {
		return this._cnpj;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public setNome(value: string) {
		this._nome = value;
	}

    /**
     * Setter cnpj
     * @param {string} value
     */
	public setCnpj(value: string) {
		this._cnpj = value;
	}

}