import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable } from 'rxjs';


export interface PeriodicElement {
  unit_kerja: string;
  nama: string;
  nip: number;
  jabatan: string;
  id: string;
}


const ELEMENT_DATA: PeriodicElement[] = [];
export interface DialogData {
  data: any;
}

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  dataform = {};
  linkfiresotre = AngularFirestoreCollection;
  datasource = ELEMENT_DATA;
  constructor(
    public dialogRef: MatDialogRef<FormEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,db:AngularFirestore) {
      this.linkfiresotre = db.collection('FormulirPenilaianKerja');
      this.datasource=data.data;
    }
   

  update_data(unit_kerja,nama,nip,jabatan): void {
  this.dataform = {nama:nama,nip:nip,jabatan:jabatan,unit_kerja:unit_kerja};
    this.linkfiresotre.doc(this.data.data.id).update(this.dataform);
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
