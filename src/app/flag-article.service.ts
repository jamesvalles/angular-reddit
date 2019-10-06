import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlagArticleService {

  constructor() { }

  lowestVote() : void{
    console.log("Service activated")
  }
}
