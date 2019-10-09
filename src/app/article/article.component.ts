import {
  Component,
  OnInit,
  Input,        // <-- added,
  HostBinding,
  enableProdMode
} from '@angular/core';
import { Article } from './article.model'; // <-- added
import {FlagArticleService} from '../flag-article.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor(public _flagArticle : FlagArticleService) {
    // article is populated by the Input now,
    // so we don't need anything here
  }

  voteUp(): boolean {
    console.log("Voted up.")
    this.article.voteUp();
    this._flagArticle.updateCount(this.article);
    return false;
  }

  voteDown(): boolean {
    console.log("Voted down.")
    this.article.voteDown();
    this._flagArticle.updateCount(this.article);
    return false;
  }

  flagArticle(): boolean{
    console.log("Article flagged button pressed.");
    this._flagArticle.lowestVote(this.article);
    return false;
  }

  ngOnInit() {
  }

}
