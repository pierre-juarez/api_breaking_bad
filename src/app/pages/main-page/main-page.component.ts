import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Character } from 'src/app/interfaces/Character';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  characters: Character[] | undefined;
  charactersCopy: Character[] | undefined;

  constructor(public http: HttpClient){
    this.getData();
  }

  title = 'API Breaking Bad 🚀🤩'
  apiURL = 'https://breakingbadapi.com/api/characters'
  urlDev = 'https://github.com/pierre-juarez'

  async getData(){
    await this.http
      .get<any>(this.apiURL)
      .subscribe((resp) => {
        this.characters = resp.map(({char_id, name, nickname, img, status, occupation}:Character) => {
          return { char_id, name, nickname, img, status, occupation }
        });
        this.charactersCopy = this.characters;
      });
  }
  
  filter(e: any){
    const value = e.target.value;
    this.characters = this.charactersCopy?.filter(({name}:Character) => {
      return name.toLowerCase().includes(value.toLowerCase());
    });
  }
  getTimeYear(){
    const yearCreation = 2022, yearCurrent = new Date().getFullYear();
    return (yearCreation === yearCurrent) ? yearCreation : `${yearCreation} - ${yearCurrent}`; 
  }
}
