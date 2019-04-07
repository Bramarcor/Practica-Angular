import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'; // Se importa para usar el metodo Navigate


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router) {
   }

  ngOnInit() {
  }

  // En laSiguiente Funcion Se obtiene el Texto Buscado
  buscarHeroe( textoBuscado: string) {
  this.router.navigate( ['/resultado', textoBuscado]); // Con esta linea Redirecciona al componente Resultado.
  }

}
