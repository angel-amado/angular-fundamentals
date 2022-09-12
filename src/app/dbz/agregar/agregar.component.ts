import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
  constructor(private DbzService: DbzService) {}
  //Ya no estamos usando el Output, entonces lo dejamos comentado
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    //Tampoco necesitaré esta línea ahora, porque voy a acceder al servicio
    //this.onNuevoPersonaje.emit(this.nuevo);

    //Agregaré mis personajes usando el servicio
    this.DbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
