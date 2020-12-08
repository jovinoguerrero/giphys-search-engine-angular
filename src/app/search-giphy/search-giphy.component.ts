import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-giphy',
  templateUrl: './search-giphy.component.html',
  styleUrls: ['./search-giphy.component.css']
})
export class SearchGiphyComponent implements OnInit {
  enter: any;

  constructor() { }

  ngOnInit(): void {}

  searchGiphy(formy) {
    location.href = `/results/${formy.value.enter}`
    
    // Mostrar http://localhost:4200/home
    console.log(location.href)
    // Mostrar o formulrio e as suas propriedades
    console.log(formy)
    // Mostrar 
    console.log(formy.value)
    // Mostrar valor ingresado
    console.log(formy.value.enter)
  }
}
