import { Injectable, Input } from '@angular/core';
import {Article} from '../app/article/article.model'
import {AppComponent} from '../app/app.component'

@Injectable({
  providedIn: 'root'
})
export class FlagArticleService {
 
  constructor() { }

  lowestVote(article : Article) : void{
    console.log("Flag article service invoked.");
    var appComp = new AppComponent(); 
    var updatedArticle = appComp.updateArticles(article);
    this.updateCount(updatedArticle);
  }

  updateCount(article: Article){
    var appComp = new AppComponent(); 
    var articleContainer = appComp.articles;
    for(var i = 0; i < articleContainer.length; i++){
      if(article.link == articleContainer[i].link){
        articleContainer[i].votes = article.votes;
      }
      console.log(articleContainer[i]); 
    }

    console.log("Update count")
  }
}
