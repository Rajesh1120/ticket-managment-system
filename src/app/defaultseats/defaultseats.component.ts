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
  clickedNext:boolean=false;
  clickedPurchase:boolean=false;
  constructor(){
    console.log(this.seats);
  }
  inital_selected:any =[];
  onSeatClicked(seat: any){
    if(seat.seat_status==="unselected"){
      seat.seat_status="selected"
      this.inital_selected.push(seat);
    }
    else if(seat.seat_status==="selected"){
      seat.seat_status="unselected"
      this.inital_selected.map.subscribe();/////////////////////
    }
    
  }
  onCheckOut(inital_selected:any){
    if (inital_selected){
      this.clickedNext=true;
    }
    else{
      this.clickedNext=false;
    }
  }
  onPurchase(inital_selected:any){
    for(let i =0; i<inital_selected.length; i++){
      inital_selected[i].seat_status="occupied";
      this.clickedPurchase=true;
    }
    this.inital_selected=[];
    
  }
  onCancelBooking(){
    this.clickedPurchase=false;
    this.inital_selected=[];
  }
  
}
