import { NovaTransferenciaComponent } from './nova-transferencia/nova.transferencia.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  valor: number;
  destino: number;
  transferencia : any;

  transferir($event){

    console.log($event);

    this.destino = $event.destino;
    this.valor = $event.valor;

    this.transferencia = $event;
  }
}
