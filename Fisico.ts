import { Cliente } from "./Cliente";

export class Fisico extends Cliente {
    

    private _cpf: string;
    private _rg: string;
    private _genero: string;
    
    constructor(
        nome: string, 
        login: string,
        senha: string,
        email: string,
        cpf: string,
        rg: string,
        genero: string) {
            super(nome, login, senha, email);
            this._cpf = cpf;
            this._rg = rg;
            this._genero = genero;
        }
    


    /**
     * Getter cpf
     * @return {string}
     */
	public getCpf(): string {
		return this._cpf;
	}

    /**
     * Getter rg
     * @return {string}
     */
	public getRg(): string {
		return this._rg;
	}

    /**
     * Getter genero
     * @return {string}
     */
	public getGenero(): string {
		return this._genero;
	}

    /**
     * Setter cpf
     * @param {string} value
     */
	public setCpf(value: string) {
		this._cpf = value;
	}

    /**
     * Setter rg
     * @param {string} value
     */
	public setRg(value: string) {
		this._rg = value;
	}

    /**
     * Setter genero
     * @param {string} value
     */
	public setGenero(value: string) {
		this._genero = value;
	}
   
    
    
}