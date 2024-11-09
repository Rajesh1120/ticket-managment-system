import { Component } from '@angular/core';
import { DefaultSeats } from './defaultseatsservice.component';
import { CommonModule } from '@angular/common';
import { moviesenglish } from '../towncenter/towncenter.service.component';

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
    if (this.seats.length===this.inital_selected){
     // is this full ?
    }
  }
  inital_selected:any =[];

  onSeatClicked(seat: any){
    if(seat.seat_status==="unselected"){
      seat.seat_status="selected"
      this.inital_selected.push(seat);
    }
    else if(seat.seat_status==="selected"){
      seat.seat_status="unselected"
      this.inital_selected=this.inital_selected.filter((item:any)=> item.id !== seat.id)
      console.log(this.inital_selected)
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
    this.clickedNext=false;
    // message that you have purchased
    
  }
  onCancelBooking(){
    this.clickedPurchase=false;
    this.clickedNext=false;
    
  }
  
}
