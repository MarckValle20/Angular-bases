import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Molk', 'Tor'];
  public deletedHero?: string;

  removeLastHero(): void{
    this.deletedHero = this.heroNames.pop();
  }

}
