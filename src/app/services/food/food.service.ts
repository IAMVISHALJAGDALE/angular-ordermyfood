import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';  
import { Tag } from 'src/app/shared/models/Tag'; 
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number): Foods{
    return this.getAll().find(food=>food.id == id)!;
  }
  
  getAllFoodByTag(tag:string):Foods[]{
    return tag == "All"?
     this.getAll() : this.getAll().filter(food=>food.tags?.includes(tag));
  }
  getAllTag(): Tag[]{
    return[
      { name: 'All', count: 14} ,
      { name: 'FastFood', count: 4} ,
      { name: 'Pizza', count: 2} ,
      { name: 'Lunch', count: 3} ,
      { name: 'Slowfood', count: 2} ,
      { name: 'Hamburger', count: 1} ,
      { name: 'Fry', count: 1} ,
      { name: 'Soup', count: 1} ,

    ]
  }
  getAll():Foods[]{
    return [
     {
      id:1,
      price: 80,
      name:'Chicken Biryani',
      favorite:true,
      star:4.5,
      tags:['Lunch'],
      imageUrl:'./assets/food-1.jpg',
      cookTime:'10-60',
      origin:['india']
     },
     {
      id:2,
      price: 60,
      name:'Shev Bhaji',
      favorite:false,
      star:4.5,
      tags:['Lunch'],
      imageUrl:'./assets/food-2.jpg',
      cookTime:'10-50',
      origin:['india']
     },
     {
      id:3,
      price: 40,
      name:'Chize Burger',
      favorite:true,
      star:4.5,
      tags:['FastFood','Hamburger','Slowfood'],
      imageUrl:'./assets/food-3.jpg',
      cookTime:'10-20',
      origin:['italy']
     },
     {
      id:4,
      price: 25,
      name:'Fish Fry',
      favorite:false,
      star:4.5,
      tags:['Fry'],
      imageUrl:'./assets/food-4.jpg',
      cookTime:'10-20',
      origin:['italy','india','france']
     },
     {
      id:5,
      price: 50,
      name:'Soup',
      favorite:false,
      star:4.5,
      tags:['FastFood','Soup','Slowfood'],
      imageUrl:'./assets/food-5.jpg',
      cookTime:'10-20',
      origin:['china']
     },
     {
      id:6,
      price: 20,
      name:'Pizza',
      favorite:false,
      star:4.5,
      tags:['FastFood','Pizza'],
      imageUrl:'./assets/food-6.jpg',
      cookTime:'10-20',
      origin:['italy']
     },
     {
      id:7,
      price: 90,
      name:'Mutton Curry',
      favorite:true,
      star:4.5,
      tags:['Lunch'],
      imageUrl:'./assets/food-7.jpg',
      cookTime:'10-20',
      origin:['italy','india','south-india']
     },
     {
      id:8,
      price: 40,
      name:'Pizza',
      favorite:false,
      star:4.5,
      tags:['FastFood','Pizza'],
      imageUrl:'./assets/food-8.jpg',
      cookTime:'10-20',
      origin:['italy']
     }

    ]
  }
}
