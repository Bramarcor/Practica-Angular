import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../services/heroes.service'; // se importa la informacion, las funciones y la interface


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent implements OnInit {

  rheroes: Heroe[] = [];
  textoBuscado: string;

  // tslint:disable-next-line:variable-name
  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router) {
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.textoBuscado = params['termino'];
      this.rheroes = this._heroesService.buscarHeroeServ( params['termino']); // El nombre termino hace referencia a routes.ts
    } );
  }

  verHeroe( idx: number ) {
    this.router.navigate( ['/heroe', idx]);
  }


}
