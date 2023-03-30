import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private activeLinkSubject = new BehaviorSubject<string>('home');
  public activeLink$ = this.activeLinkSubject.asObservable();

  setActiveLink(link: string) {
    this.activeLinkSubject.next(link);
  }
}
