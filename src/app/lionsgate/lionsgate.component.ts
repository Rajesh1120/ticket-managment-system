import { Component } from '@angular/core';
import { moviesenglish } from '../towncenter/towncenter.service.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lionsgate',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './lionsgate.component.html',
  styleUrl: './lionsgate.component.css'
})
export class LionsgateComponent {

  movies=moviesenglish;

  constructor(){
    console.log(this.movies)
  }
}
