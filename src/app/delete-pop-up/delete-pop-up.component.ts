import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-delete-pop-up',
  templateUrl: './delete-pop-up.component.html',
  styleUrls: ['./delete-pop-up.component.css']
})
export class DeletePopUpComponent implements OnInit {

  linkfirestore: AngularFirestoreCollection;

  constructor(
    public dialogRef: MatDialogRef<DeletePopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,db:AngularFirestore) {
      this.linkfirestore = db.collection('FormulirPenilaianKerja');
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  oke(): void {
    console.log(this.data.id);
    this.linkfirestore.doc(this.data.id).delete();
  }

  cancel(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
