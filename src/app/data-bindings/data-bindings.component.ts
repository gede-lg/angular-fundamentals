import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bindings',
  templateUrl: './data-bindings.component.html',
  styleUrls: ['./data-bindings.component.css']
})
export class DataBindingsComponent {

  nome: string = 'Teste Data-bindings';

  mudarNome(novoNome: string): void {
    this.nome = 'Nome alterado';
  }
}
