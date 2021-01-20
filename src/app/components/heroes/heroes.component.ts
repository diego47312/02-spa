import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe';
import { Router } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[]= [];
  constructor( private heroesService: HeroesService,
    private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe (id: number): void{
    console.log(id);
    this.router.navigate(['/heroe',id]);
  }

}
