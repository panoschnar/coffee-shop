import { Component, OnInit } from '@angular/core';
import { ICoffee, SortOptions } from 'src/app/model/coffee';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';
import { query, orderBy, limit } from "firebase/firestore";  


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
SortOptions: SortOptions   = SortOptions.TitleAscending;
coffeesDisplay!:ICoffee[];
coffees: ICoffee[] = [];
titleIsAsc: boolean = true;

  newCoffee: ICoffee = {
    id: '',
    title: '',
    origin: '',
    price: 0,
    kg: 0,
  };
  id: string = '';
  title: string = '';
  origin: string = '';
  price: number = 0;
  kg: number = 0;

  editedCoffee: ICoffee = {
    id: '',
    title: '',
    origin: '',
    price: 0,
    kg: 0,
  };
  constructor(private auth: AuthService, private data: DataService) {}

  ngOnInit(): void {
    this.getAllCoffees();
  
  }

  // -------- CRUD ---------- //

 
  getAllCoffees() {
    
    this.data.getCoffees().subscribe((res) => {

        this.coffees =  res.map((e: any) => {
          // return {
            
          //   id: e.payload.doc.id,
          // ... e.payload.doc.data(),
          
          // } as ICoffee;
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id ;
          return data;
        });
      },
      (err) => {
        alert('Error while fetching data..');
      }
    );
  }

  addCoffee() {
    if (
      this.title == ' ' ||
      this.origin == '' ||
      this.price == 0 ||
      this.kg == 0
    ){
      alert('Please fill all input fields');
    return;
  }
    this.newCoffee.id="";
    this.newCoffee.title=this.title;
    this.newCoffee.origin=this.origin;
    this.newCoffee.kg=this.kg;
    this.newCoffee.price=this.price;

    this.data.addCoffee(this.newCoffee);
    this.resetForm();
  }

  updateCoffee(){
    const myCoffee:ICoffee ={
      title: this.editedCoffee.title,
      origin: this.editedCoffee.origin,
      kg: this.editedCoffee.kg,
      price: this.editedCoffee.price,
      id: ''
    };
    
    if (this.editedCoffee.id) {
      this.data.updateCoffee(this.editedCoffee.id, myCoffee)
      alert('Updated successfully!')
      
    }
    
  }
  

  deleteCoffee(coffee: ICoffee) {
    if (
      window.confirm(
        'Are you sure you want to delete ' +
          coffee.title +
          ' from ' +
          coffee.origin +
          ' ?'
      )
    )
      this.data.deleteCoffee(coffee);
  }

  // -------- SORT ---------- //

  ToggleSortTitle() {
    this.titleIsAsc = !this.titleIsAsc;
    this.SortOptions = this.titleIsAsc ? SortOptions.TitleAscending : SortOptions.TitleDescending;
  }
onSortCoffees(){
switch(this.SortOptions){
  case SortOptions.TitleAscending: this.data.SortService(); break;
  case SortOptions.TitleDescending: this.data.SortService(); break;
  case SortOptions.OriginAscending: this.coffeesDisplay.sort((a,b)=> a.origin < b.origin ? -1 : 1); break;
  case SortOptions.OriginDescending: this.coffeesDisplay.sort((a,b)=> a.origin > b.origin ? -1 : 1); break;
  case SortOptions.KgAscending: this.coffeesDisplay.sort((a,b)=> a.kg - b.kg); break;
  case SortOptions.KgDescending: this.coffeesDisplay.sort((a,b)=> b.kg - a.kg); break;
  case SortOptions.PriceAscending: this.coffeesDisplay.sort((a,b)=> a.price - b.price); break;
  case SortOptions.PriceDescending: this.coffeesDisplay.sort((a,b)=> b.price - a.price); break;
  default : this.data.SortService(); break;
}
}

  EditModal(coffee:ICoffee){
this.editedCoffee=coffee;
  }
  resetForm(){
    this.id = '';
    this.title = '';
    this.origin = '';
    this.price = 0;
    this.kg = 0;
  }
}
