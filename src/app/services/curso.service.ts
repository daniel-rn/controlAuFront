import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }


  getCursos() {
    return [
      {
        id: 1, nome: 'Angular 2'
      },
      {
        id: 2, nome: 'Java'
      }];
  }


  getCurso(id: number) {
    let cursos = this.getCursos();
    for (let index = 0; index < cursos.length; index++) {
      let element = cursos[index];
      if (element.id == id) { return element; }
    }
    return null;
  }

}
