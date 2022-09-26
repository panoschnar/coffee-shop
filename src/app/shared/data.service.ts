import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map, Observable } from 'rxjs';
import { ICoffee } from '../model/coffee';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  coffeeCollection!: AngularFirestoreCollection<ICoffee>
  coffees!: Observable<ICoffee[]>
  sort: string= 'title'
  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) {
    console.log(this.afs.collection('/Coffees'));

  }


SortService(){
  return this.afs.collection('/Coffees', ref => ref.orderBy('title'));

}
  //Add
  addCoffee(coffee: ICoffee) {
    coffee.id = this.afs.createId();
    this.afs.collection('/Coffees').add(coffee);
  }

  //Get
  getCoffees() {
    return this.afs.collection('/Coffees').snapshotChanges();
  }

  //Update
  updateCoffee(id:string, coffee: ICoffee) {
    this.afs.collection('/Coffees').doc(id).update(coffee);
   
  }

  //Delete
  deleteCoffee(coffee: ICoffee) {
    this.afs.doc('/Coffees/' + coffee.id).delete();
  }
}
