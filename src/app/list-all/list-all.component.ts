import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/modules/home/home/service.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent implements OnInit {

  constructor(private serviceService : ServiceService) { }
listProgs:string='البرامج'
index:number=0
  ngOnInit(): void {
    this.humanityEmitter()
  }

handleChange(event:any){

  if (event.index ==0) {
    this.listProgs='البرامج'
  } else {
    this.listProgs='الحالات المتعسرة'

  }
}

humanityEmitter() {
 this.serviceService.humanityEmitter.subscribe((status: boolean) => {
   if (status==null ) {
     return
   }
   
   this.index=1
   this.listProgs='الحالات المتعسرة'

  })
}

}
