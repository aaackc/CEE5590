import { Component, OnInit } from '@angular/core';
import { WikiService } from '@core/service/wiki-service';

@Component({
  selector: 'app-wiki-list',
  templateUrl: './wiki-list.component.html',
  styleUrls: ['./wiki-list.component.css']
})
export class WikiListComponent implements OnInit {
  // variable to get wiki restuls.
  wikiResult : any;
  // varaiable to get search terms.
  searchValue : string;
  constructor(private wikiService : WikiService) {
    this.searchValue = "";
  }

  ngOnInit() {
  }

  getWikiList(){

    this.wikiService.getWikiList(this.searchValue).subscribe(result => {
      this.wikiResult = Object.keys(result.query.pages).map(function (k) {
        var i = result.query.pages[k];
        return {title: i.title, body: i.extract, page: 'http://en.wikipedia.org/?curid=' + i.pageid}
      });

    });
  }

}
