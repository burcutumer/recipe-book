import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterseptorService } from "./auth/auth-interseptor.service";
import { RecipeServices } from "./recipes/recipes.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";

@NgModule({
  providers:[
    ShoppingListService,
    RecipeServices,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterseptorService,
      multi: true
    }
  ]
})
export class CoreModule{

}
