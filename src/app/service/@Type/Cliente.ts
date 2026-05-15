
//Esse seria basicamente o ENUM referente aos estados, que é apli
export type Estados = 'AC' | 'AL' | 'AP' | 'AM' | 'BA' | 'CE' | 'DF' | 'ES' | 'GO' |
                      'MA' | 'MT' | 'MS' | 'MG' | 'PA' | 'PB' | 'PR' | 'PE' | 'PI' | 
                      'RJ' | 'RN' | 'RS' | 'RO' | 'RR' | 'SC' | 'SP' | 'SE' | 'TO';

export interface Cliente {
    nome: string;
    email: string;
    senha: string;
    idade: number;
    logradouro: string;
    cep: string;
    numero: string;
    complemento: string;
    estado: Estados;
    cidade: string;

}