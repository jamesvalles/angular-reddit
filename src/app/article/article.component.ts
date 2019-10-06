import {
  Component,
  OnInit,
  Input,        // <-- added,
  HostBinding,
  enableProdMode
} from '@angular/core';
import { Article } from './article.model'; // <-- added

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
    // article is populated by the Input now,
    // so we don't need anything here
  }

  voteUp(): boolean {
    console.log("Voted up.")
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    console.log("Voted down.")
    this.article.voteDown();
    return false;
  }

  flagArticle(): boolean{
    console.log("Article flagged.");
    this.article.flagArticle;
    return false;
  }

  ngOnInit() {
  }

}
