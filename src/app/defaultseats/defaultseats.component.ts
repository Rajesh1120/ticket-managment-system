import { Component } from '@angular/core';
import { DefaultSeats } from './defaultseatsservice.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-defaultseats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './defaultseats.component.html',
  styleUrl: './defaultseats.component.css'
})

export class DefaultseatsComponent {
  
  seats=DefaultSeats;
  clickedNext=false;
  constructor(){
    console.log(this.seats);
  }
  inital_selected:any =[];
  onSeatClicked(seat: any){
    if(seat.seat_status==="unselected"){
      seat.seat_status="selected"
      this.inital_selected.push(seat);
    }
    
  }
  onCheckOut(inital_selected:any){
    if (inital_selected){
      this.clickedNext=true
    }
  }
  onPurchase(){

  }
  
}
