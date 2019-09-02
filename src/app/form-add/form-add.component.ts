import { Component, OnInit, IterableDiffers } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  checked = false;
  dataform = {};
  linkfiresotre = AngularFirestoreCollection;
  constructor(
    public dialogRef: MatDialogRef<FormAddComponent>,db:AngularFirestore) {
      this.linkfiresotre = db.collection('FormulirPenilaianKerja');
    }
   

  tambah_data(nama212): void {
  this.dataform = {nama:nama212,nip:987654,jabatan:"zxcvbn",unit_kerja:"unit_kerja212"};
    this.linkfiresotre.add(this.dataform);
    this.dialogRef.close();
  }

  


  ngOnInit() {
  }

}
