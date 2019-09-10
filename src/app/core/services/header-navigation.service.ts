import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderNavigationService {

  private _tab: BehaviorSubject<string[]> = new BehaviorSubject( [] );
  public readonly tabObs: Observable<string[]> = this._tab.asObservable();

  private dataStore: {  // This is where we will store our data in memory
    tab
  };
  constructor() {
    this.dataStore = { 
      tab : []
  }
   }

   public tab(value){
    //  debugger;
    this._tab.next([value]);
    this.dataStore.tab = [value];
   }

   public gettab(){
    return this.dataStore.tab;
  }
}
