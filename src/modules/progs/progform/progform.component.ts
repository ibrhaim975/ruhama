import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Params } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-progform',
  templateUrl: './progform.component.html',
  styleUrls: ['./progform.component.scss'],
  providers: [MessageService]

})
export class ProgformComponent implements OnInit {
  loading = false
  constructor(private route: ActivatedRoute, private db: AngularFirestore
    , private messageService: MessageService) {

    this.route.queryParams.subscribe((params: Params) => {
      if (params == null || params == undefined) {
        return
      }
      this.amount = params.amonut
    });
  }
  prog: any
  routeId: any = null!
  porgess = 0
  amount: number = 0
  sumbit: boolean = false
  payment: boolean = false
  displayshare = false
  sharelink: string = null!
  ngOnInit(): void {

    this.loading = true

    this.getPorg()

  }
  getPorg() {
    this.route.params.subscribe(params => {

      this.routeId = params['id']

    });
    this.db.collection('progs/').doc(this.routeId).snapshotChanges().subscribe((response) => {
      this.prog = response.payload.data()

      this.prog.remaining_amount = this.prog.req_amount - this.prog.collected_amount
      if (this.prog.collected_amount == 0) {
        this.porgess = 0
      } else {
        this.porgess = (this.prog.collected_amount * 100) / this.prog.req_amount
        this.porgess = Math.round(this.porgess)
      }

      this.loading = false


    })




  }

  payment_typeselected(ev: Boolean) {

    if (ev == true) {
      this.payment = true

    }

    if (ev == false) {
      this.payment = false

    }
  }
  payment_done(ev: Boolean) {

    this.messageService.add({ severity: 'success', life: 6000, summary: 'ثمت عملية التبرع بنجاح' })

    setTimeout(() => {

      location.reload()
    }, 6000);
  }

  display_share(id: string, path: string) {
    this.displayshare = true
    this.sharelink = 'https://www.ruhmalkher.com/' + path + '/' + this.routeId;

  }
  copyMessage() {
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
