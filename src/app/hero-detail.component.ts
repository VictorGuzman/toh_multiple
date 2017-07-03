import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  //Multiple Select Tests
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.heroService.getHero(id)
            .then(hero => {
              this.hero = hero;
              this.dropdownList = this.generateEnemiesDropdownList();
              this.selectedItems = this.getSelectedItems(this.hero);
            });
      } else {
        this.navigated = false;
        this.hero = new Hero();
      }
    });

    this.dropdownSettings = { 
      singleSelection: false, 
      text:"Select Enemies",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      classes:"col-1-4"
    }; 
  }

  save(): void {
    this.heroService
        .save(this.hero)
        .then(hero => {
          this.hero = hero; // saved hero, w/ id if new
          this.goBack(hero);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }

  goBack(savedHero: Hero = null): void {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }

  onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
  }

  OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
  }

  onSelectAll(items: any){
    console.log(items);
  }

  generateEnemiesDropdownList(): Object[] {
    let enemies = [
      { "id": 1, "itemName": "Loki" },
      { "id": 2, "itemName": "Green Goblin" },
      { "id": 3, "itemName": "Joker" },
    ];
    return enemies;
  }

  getSelectedItems(hero: Hero): Object[] {
    let res = [];

    for (let i=0; i < hero.enemies.length; i++) {
      res.push({
        "id": hero.enemies[i]["id"],
        "itemName": hero.enemies[i]
      });
    }

    return res;
  }
}
