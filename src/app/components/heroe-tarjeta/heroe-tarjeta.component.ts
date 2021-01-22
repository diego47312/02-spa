import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../models/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;
  @Input() id: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router ) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe (): void{
    this.heroeSeleccionado.emit(this.id);
    // console.log(this.id);
    // this.router.navigate(['/heroe',this.id]);
  }

}
