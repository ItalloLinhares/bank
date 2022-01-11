import { Component, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

    @Output() aoTransferir = new EventEmitter<any>();

    valor: number;
    destino: number;

    transferir(){
      console.log('Solicitada a transferencia')
      console.log('Valor: ', this.valor)
      console.log('Destino: ', this.destino)
    }
}
