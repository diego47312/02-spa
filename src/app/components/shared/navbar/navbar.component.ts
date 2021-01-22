import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../../models/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
    private router: Router ) { }

  ngOnInit(): void {
  }

  buscarHeroe(search: string){
    console.log(search);
    this.router.navigate(['/heroes',search]);

  }

}
