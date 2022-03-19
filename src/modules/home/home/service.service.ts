import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public humanity: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null!);
  public humanityEmitter: Observable<boolean> = this.humanity.asObservable();
  constructor() { }
}
