import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent {
  title = 'Whati'
  
  filter(e: any){
    const value = e.target.value;
    console.log("🚀 ~ file: main-page.component.ts ~ line 14 ~ MainPageComponent ~ filter ~ value", {value})

    // TODO Search filter
    
  }
}
