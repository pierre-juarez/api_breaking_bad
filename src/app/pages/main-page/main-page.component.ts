import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Character } from 'src/app/interfaces/Character';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent {
  characters: Character[] | undefined;

  constructor(public http: HttpClient){
    this.getData();
  }

  title = 'API Breaking Bad'
  apiURL = 'https://breakingbadapi.com/api/characters'

  async getData(){
    await this.http
      .get<any>(this.apiURL)
      .subscribe((resp) => {
        console.table(resp)
      });
  }
  
  filter(e: any){
    const value = e.target.value;
    console.log("🚀 ~ file: main-page.component.ts ~ line 14 ~ MainPageComponent ~ filter ~ value", {value})

    // TODO Search filter
    
  }
}
