import { Cliente } from "./Cliente";

class Juridico extends Cliente {

    private _cnpj: string;

    constructor(
        nome: string, 
        login: string,
        senha: string,
        email: string,
        cnpj: string) {
            super(nome, login, senha, email);
            this._cnpj = cnpj;
        }


    /**
     * Getter cnpj
     * @return {string}
     */
	public get cnpj(): string {
		return this._cnpj;
	}

    /**
     * Setter cnpj
     * @param {string} value
     */
	public set cnpj(value: string) {
		this._cnpj = value;
	}


}