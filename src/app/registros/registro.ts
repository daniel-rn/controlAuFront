export class Registro {
    nome: string;
    tipoRegistro: TipoRegistro;
    data: Date = new Date()
}

export enum TipoRegistro {
    Entrada = 0,
    Saida = 1,
}