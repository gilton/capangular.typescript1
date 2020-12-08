export class Endereco {

    private rua:    string;
    private numero: string;
    private bairro: string;
    private cep:    string;


	constructor($rua:    string, $numero: string, $bairro: string, $cep:    string) {
		this.rua = $rua;
		this.numero = $numero;
		this.bairro = $bairro;
		this.cep = $cep;
	}


    /**
     * Getter $rua
     * @return {   string}
     */
	public getRua():    string {
		return this.rua;
	}

    /**
     * Getter $numero
     * @return {string}
     */
	public getNumero(): string {
		return this.numero;
	}

    /**
     * Getter $bairro
     * @return {string}
     */
	public getBairro(): string {
		return this.bairro;
	}

    /**
     * Getter $cep
     * @return {   string}
     */
	public getCep():    string {
		return this.cep;
	}

    /**
     * Setter $rua
     * @param {   string} value
     */
	public setRua(value:    string) {
		this.rua = value;
	}

    /**
     * Setter $numero
     * @param {string} value
     */
	public setNumero(value: string) {
		this.numero = value;
	}

    /**
     * Setter $bairro
     * @param {string} value
     */
	public setBairro(value: string) {
		this.bairro = value;
	}

    /**
     * Setter $cep
     * @param {   string} value
     */
	public setCep(value:    string) {
		this.cep = value;
	}


}