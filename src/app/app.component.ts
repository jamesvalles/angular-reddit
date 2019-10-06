import { Component, Input } from '@angular/core';
import { Article } from './article/article.model';

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
      new Article('Angular', 'http://angular.io', "user", 3),
      new Article('Fullstack', 'http://fullstack.io', "administrator", 2),
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

  updateArticles(article : Article) : void{
    this.article = article;
    this.article.votes = 0;
    for(var i = 0; i < this.articles.length; i++){
      console.log(this.articles[i].votes);

    }
    console.log("updated articles in app comppnent");

  }
}
