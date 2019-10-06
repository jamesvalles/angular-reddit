import { Injectable, Input } from '@angular/core';
import {Article} from '../app/article/article.model'
import {AppComponent} from '../app/app.component'

@Injectable({
  providedIn: 'root'
})
export class FlagArticleService {

  constructor() { }

  lowestVote(article : Article) : void{
    console.log("Getting lowest vote.");
    var appComp = new AppComponent(); 
    appComp.updateArticles(article);
  }
}
