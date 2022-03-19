import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor(private db: AngularFirestore, private router: Router) { }
  progs: any[] = []
  sharelink: string = null!
  displayshare = false
  loading = false
  ngOnInit(): void {
    this.loading = true

    this.getPorgs()

  }
  getPorgs() {
    this.db.collection('news').snapshotChanges().subscribe((response) => {
      this.progs = response.map(item =>
        Object.assign({ id: item.payload.doc.id }, item.payload.doc.data())
      );


      this.loading = false



    })
  }
  navigateToProg(id: string) {

    this.router.navigate(['activity/' + id])
  }

}
