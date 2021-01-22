import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[]= [];
  constructor( private heroesService: HeroesService,
               private router: Router,
               private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe( params => {
      if (typeof params !== 'undefined' && params['search'] !== undefined ) {
        this.heroes = this.heroesService.getHeroesByName(params['search'])
      }else{
        this.heroes = this.heroesService.getHeroes();
      }
      
    });
  }

  ngOnInit(): void {
    
  }

  verHeroe (id: number): void{
    console.log(id);
    this.router.navigate(['/heroe',id]);
  }



}
