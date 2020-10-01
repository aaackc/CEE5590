import { Component, OnInit } from '@angular/core';
import { RecipiesService } from '@core/service/recipies-service';
import { RecipeList } from '@core/models/Recipe/Recipe-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  recipeValue : string;  
  Recipelistdata : RecipeList;
  constructor(private recipiesService : RecipiesService,
    private router: Router,) { }

  ngOnInit() {
    this.recipeValue = "";
    this.Recipelistdata = new RecipeList();
  }
  getReciepe(){
    this.recipiesService.getRecipie(this.recipeValue).subscribe(result => {
      this.Recipelistdata = result;
    });
  }

}
