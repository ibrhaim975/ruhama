import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-h-list',
  templateUrl: './h-list.component.html',
  styleUrls: ['./h-list.component.scss']
})
export class HListComponent implements OnInit {
  constructor(private db: AngularFirestore,private router :Router) { }
  humanity:any[]=[]
  sharelink:string=null!
  loading=false
  displayshare : boolean=false
  ngOnInit(): void {
this.getPorgs()

  }
 getPorgs() {
   this.loading=true
    this.db.collection('humanity').snapshotChanges().subscribe((response) => {
      this.humanity = response.map(item =>
        Object.assign({ id: item.payload.doc.id }, item.payload.doc.data())
      );
      let humanity: any[] = []
      this.humanity.map(item => {


        item.remaining_amount = item.req_amount - item.collected_amount
        if (item.status == true) {
          humanity.push(item)
        }
      })
      this.humanity = humanity
      this.loading=false



    })
  }
  navigateToProg(id:string,amount:number){
    
    this.router.navigate(['humanity/'+id], {
      queryParams: {
        amonut: amount
      },
      queryParamsHandling: 'merge',
    });
      }

      display_share(id:string , path:string){
        this.displayshare=true
        this.sharelink = 'https://www.ruhmalkher.com/'+path+'/'+id;
        
          }
            copyMessage(){
              const selBox = document.createElement('textarea')!
              selBox.style.position = 'fixed';
              selBox.style.left = '0';
              selBox.style.top = '0';
              selBox.style.opacity = '0';
              selBox.value = this.sharelink;
              document.body.appendChild(selBox);
              selBox.focus();
              selBox.select();
              document.execCommand('copy');
              document.body.removeChild(selBox);
            
        
          }
}

