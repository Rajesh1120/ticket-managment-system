import { Component } from '@angular/core';
import { moviesenglish } from './towncenter.service.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-towncenter',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './towncenter.component.html',
  styleUrl: './towncenter.component.css'
})
export class TowncenterComponent {
  
  movies=moviesenglish

  constructor(){
    console.log(this.movies)
  }

}
