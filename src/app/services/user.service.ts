import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { from, Observable } from "rxjs";
import { UserModel } from "./types";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersCollection: AngularFirestoreCollection<UserModel>;
  users$: Observable<UserModel[]>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = afs.collection<UserModel>('users');
    this.users$ = this.usersCollection.valueChanges({ idField: 'id' });
  }

  addUser(user: UserModel): Observable<DocumentReference> {
    return from(this.usersCollection.add(user));
  }

  updateUser(user: UserModel): Observable<void> {
    return from(
      this.afs.doc<UserModel>(`users/${user.id}`).update({
        name: user.name,
        playDragons: user.playDragons,
        practiceDragons: user.practiceDragons
      }),
    );
  }
}
