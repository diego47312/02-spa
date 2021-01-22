import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = new Heroe("","","","","");

  constructor( private activatedRoute: ActivatedRoute,
              private  heroesService: HeroesService) {
    console.log('entra');
    this.activatedRoute.params.subscribe( params => {
    console.log('entra1');
    this.heroe = this.heroesService.getHeroe(params['id'])
    console.log(this.heroe);
    });
  }

  ngOnInit(): void {
    
  }

}
