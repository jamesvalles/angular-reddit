import { Injectable } from '@angular/core';
import {Article} from '../app/article/article.model'

@Injectable({
  providedIn: 'root'
})
export class FlagArticleService {

  constructor() { }

  lowestVote(article : Article) : void{
    article.votes = 0; 
    console.log("Service activated")
  }
}
