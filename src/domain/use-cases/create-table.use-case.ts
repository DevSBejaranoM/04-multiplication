export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}
// * Se implementa el caso de uso
export class CreateTable implements CreateTableUseCase {
  // ! Primer método que se llama instanciar la clase
  // ! Nos puede ayudar para l injección de dependencias
  constructor() {}

  // * Aquí se ejecutará el caso de uso
  execute({ base, limit = 10 }: CreateTableOptions) {
    let outputMessage = "";
    for (let index = 1; index <= limit; index++) {
      outputMessage += `${base} x ${index} = ${base * index}\n`;
    }

    return outputMessage;
  }
}
