import { Component } from '@angular/core';
import {Foods} from '../shared/models/food';
import {FoodService} from '../services/food/food.service';
import {ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
  food!:Foods;
  constructor(private activateRoute:ActivatedRoute, private foodService:FoodService, 
    private cartService:CartService, private router:Router) {
    activateRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food=foodService.getFoodById(params['id']);
    })
    
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
