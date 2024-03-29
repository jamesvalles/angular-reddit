import { Component, Input } from '@angular/core';
import { Article } from './article/article.model';
import { FlagArticleService } from './flag-article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  article: Article;

  constructor() {
    this.articles = [
      new Article('BBC', 'http://bbc.com', "administrator", 10),
      new Article('Angular', 'http://angular.io', "user", 3),
      new Article('Fullstack', 'http://fullstack.io', "administrator", 2),
      new Article('Techy Minute', 'http://techyminute.com', "user", 6),
      new Article('Angular Homepage', 'http://angular.io', "user", 1)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, "", 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  updateArticles(article : Article){
    console.log("Updated articles in app comppnent");
    this.article = article;
    this.article.votes = 0;
    return this.article
  }
}
