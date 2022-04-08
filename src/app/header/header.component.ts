import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";


@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
  private userSub : Subscription;
  constructor(private dataStroage: DataStorageService, private authService: AuthService){
  }

  ngOnInit(): void {
   this.userSub = this.authService.user.subscribe(user=>{
    this.isAuthenticated= !!user;
   });
  }
  onSaveData(){
    this.dataStroage.storeRecipes();
  }

  onFetchData(){
    this.dataStroage.fetchRecipes().subscribe();
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
