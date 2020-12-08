import { Cliente } from "./Cliente";

class Fisico extends Cliente {
    

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
	public get cpf(): string {
		return this._cpf;
	}

    /**
     * Getter rg
     * @return {string}
     */
	public get rg(): string {
		return this._rg;
	}

    /**
     * Getter genero
     * @return {string}
     */
	public get genero(): string {
		return this._genero;
	}

    /**
     * Setter cpf
     * @param {string} value
     */
	public set cpf(value: string) {
		this._cpf = value;
	}

    /**
     * Setter rg
     * @param {string} value
     */
	public set rg(value: string) {
		this._rg = value;
	}

    /**
     * Setter genero
     * @param {string} value
     */
	public set genero(value: string) {
		this._genero = value;
	}
   
    
    
}