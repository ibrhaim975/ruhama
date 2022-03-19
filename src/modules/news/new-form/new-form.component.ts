import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Params } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss'],
  providers: [MessageService]

})
export class NewFormComponent implements OnInit {

  constructor(private route: ActivatedRoute,private db: AngularFirestore
    ,private messageService: MessageService) { 

    this.route.queryParams.subscribe((params: Params) => {
      if (params==null || params==undefined) {
        return
      }
      this.amount=params.amonut
    });
  }
  prog:any
  routeId:any=null!
  porgess =0
  amount:number =0
  sumbit:boolean=false
  payment:boolean=false
  ngOnInit(): void {
    this.getPorg()

  }
  getPorg() {
    this.route.params.subscribe(params => {

      this.routeId =params['id']
      
    });
    this.routeId
    this.db.collection('news/').doc(this.routeId).snapshotChanges().subscribe((response) => {
      this.prog = response.payload.data()

        this.prog.remaining_amount = this.prog.req_amount - this.prog.collected_amount
        if (this.prog.collected_amount==0) {
           this.porgess =0
        } else{
          this.porgess =(this.prog.collected_amount *100)/this.prog.req_amount
          this.porgess=  Math.round(this.porgess)
        }
      console.log(this.prog);
      

      })



   
  }
 
  payment_typeselected(ev:Boolean){
    
    if (ev==true) {
      this.payment=true
   
  }

  if (ev==false) {
    this.payment=false
 
}
  }
  payment_done(ev:Boolean){
    if (ev==true) {
       this.messageService.add({ severity: 'success', life: 3000, summary: 'ثمت عملية التبرع بنجاح' })

    }
  }
}

