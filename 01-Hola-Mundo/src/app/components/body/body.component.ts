import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
})
export class BodyComponent {

    mostrar = true;

    frase: any = {
        autor: 'Ben Parker',
        mensaje: 'Un gran Poder, Requiere una gran Responsabilidad'
    };

    personajes: string[] = ['Primer Linea', 'Segunda Linea', 'Tercer Linea']
}
