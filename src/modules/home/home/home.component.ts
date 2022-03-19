import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AngularFirestore } from '@angular/fire/firestore';
import { SheardService } from 'src/app/sheard.service';
import { Router } from '@angular/router';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(public breakpointObserver: BreakpointObserver, private db: AngularFirestore
    , private sheardService: SheardService, private router: Router,
    private serviceService : ServiceService
    ) { }
  img1!: string
  main_imges: any[] = []

  progs: any[] = []
  main_humanity: any[] = []
  carsoul: number = 0
  carsoullength: number = 0
  amountd: number = null!
  mobileview: boolean = false
  stopmobileview: Boolean = true
  main_news: any[] = []
  displayshare:boolean=false
  sharelink:string=null!
  sharepath:string=null!
  loading=false
  ngOnInit(): void {
this.loading=true
    this.getMainScreen()
    this.getPorgs()
    this.geth()
    this.getnews()
    this.breakpointObserver
      .observe(['(max-width: 991.98px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches && this.mobileview == false) {
          this.stopmobileview = false
          this.mobileview = true
        } else if (state.matches && this.mobileview == true) {

          this.mobileview = false

        }
      });
  }
  ngAfterViewInit() {

  }
  getMainScreen() {
    this.db.collection('main_screen').snapshotChanges().subscribe((response) => {
      this.main_imges = response.map(item =>
        Object.assign({ id: item.payload.doc.id, link: '' }, item.payload.doc.data())
      );
      this.breakpointObserver
        .observe(['(max-width: 991.98px)'])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.main_imges.map(item => {
              item.link = item.small.link
            })
          } else {
            this.main_imges.map(item => {
              item.link = item.big.link
            })

          }
        });


    })
  }
  getPorgs() {
    this.db.collection('main_progs').snapshotChanges().subscribe((response) => {
      this.progs = response.map(item =>
        Object.assign({ id: item.payload.doc.id }, item.payload.doc.data())
      );
      let progs: any[] = []
      this.progs.map(item => {

        let datefillter = new Date(item.date)

        item.date = new Date(datefillter.getFullYear(), datefillter.getMonth(), datefillter.getUTCDate())

        if (item.status == true) {
          progs.push(item)
        }
      })
      this.progs = progs





    })
  }
  geth() {
    this.db.collection('main_humanity').snapshotChanges().subscribe((response) => {
      this.main_humanity = response.map(item =>
        Object.assign({ id: item.payload.doc.id }, item.payload.doc.data())
      );
      let main_humanity: any[] = []
      this.main_humanity.map(item => {

        let datefillter = new Date(item.date)

        item.date = new Date(datefillter.getFullYear(), datefillter.getMonth(), datefillter.getUTCDate())
        item.remaining_amount = item.req_amount - item.collected_amount
        if (item.status == true) {
          main_humanity.push(item)
        }
      })
      this.main_humanity = main_humanity
      this.carsoullength = main_humanity.length - 1


    })
  }
  getnews() {
    
    this.db.collection('main_news').snapshotChanges().subscribe((response) => {
      this.main_news = response.map(item =>
        Object.assign({ id: item.payload.doc.id }, item.payload.doc.data())
      );
      this.main_news.map(item => {

        let datefillter = new Date(item.date)

        item.date = new Date(datefillter.getFullYear(), datefillter.getMonth(), datefillter.getUTCDate())

      })
      this.loading=false


    })
  }
  carsol_cotorl_next() {


    if (this.carsoul == this.carsoullength) {
      return this.carsoul = 0

    }
    return this.carsoul = this.carsoul + 1


  }
  carsol_cotorl_prv() {
    console.log(this.carsoul);
    console.log(this.carsoullength);
    return this.carsoul = this.carsoul - 1


  }
  navigateToProg(id: string, amount: number) {

    this.router.navigate(['progs/' + id], {
      queryParams: {
        amonut: amount
      },
      queryParamsHandling: 'merge',
    });
  }
  navigateTohum(id: string, amount: number) {

    this.router.navigate(['humanity/' + id], {
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
movetoH(){
  this.router.navigate(['all/'])
  this.serviceService.humanity.next(true)
}
}
