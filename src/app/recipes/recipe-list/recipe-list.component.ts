import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes:Recipe[];
  subscription: Subscription;
  subscription2: Subscription;

  constructor(private recipeServices:RecipeServices,
            private dataStorageService: DataStorageService,
            private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.recipeServices.recipesChanged.subscribe(
      (recipes: Recipe[])=>{
        this.recipes = recipes;
      }
    );
    // this.subscription2 = this.dataStorageService.fetchRecipes()
    // .subscribe(recipes=>{
    //   this.recipeServices.recipesChanged.next(recipes);
    // });
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    // this.subscription2.unsubscribe();
  }

}
