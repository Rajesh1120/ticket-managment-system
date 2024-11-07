import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-locations',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './list-locations.component.html',
  styleUrl: './list-locations.component.css'
})
export class ListLocationsComponent {

}
