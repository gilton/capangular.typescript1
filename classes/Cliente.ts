export class Cliente {
    
    private _nome: string;
    private _login: string;
    private _senha: string;
    private _email: string;
    
    constructor(
        nome: string, 
        login: string,
        senha: string,
        email: string){
            
            this._nome = nome;
            this._login = login;
            this._senha = senha;
            this._email = email;
        }
        
        public getNome(): string {
            return this._nome;
        }
        


    /**
     * Getter login
     * @return {string}
     */
	public getLogin(): string {
		return this._login;
	}

    /**
     * Getter senha
     * @return {string}
     */
	public getSenha(): string {
		return this._senha;
	}

    /**
     * Getter email
     * @return {string}
     */
	public getEmail(): string {
		return this._email;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public setNome(value: string) {
		this._nome = value;
	}

    /**
     * Setter login
     * @param {string} value
     */
	public setLogin(value: string) {
		this._login = value;
	}

    /**
     * Setter senha
     * @param {string} value
     */
	public setSenha(value: string) {
		this._senha = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public setEmail(value: string) {
		this._email = value;
	}

        
}