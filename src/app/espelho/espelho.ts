import { TipoRegistro } from '../registros/registro';

export interface espelho {
    success: boolean;
    data: Datum[];
}

export class Datum {
    data: Date;
    tipoRegistro: TipoRegistro;
    empregado: Empregado;
    tipo: number;
    id: string;

    getRegistro() {
        if (this.tipo == 0) { return "TipoRegistro.Entrada" }
        else {
            return "TipoRegistro.Saida"
        }
    }



}

export interface Empregado {
    nome: string;
    registros: any[];
    id: string;
}