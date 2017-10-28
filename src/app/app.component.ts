import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BecaAngular Everis';
  colores = ['blanco','azul', 'rojo'];
  mostrarListaColores = false;
  funcion_enviar (valorColor){
    console.log(valorColor.value);
    this.colores.push(valorColor.value);
    valorColor.vale="";
    return false;
  }

funcion_Mostrar(){
this.mostrarListaColores=!this.mostrarListaColores;

}
}

