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
  aspek_teknis_1:number;
  aspek_teknis_2:number;
  aspek_teknis_3:number;
  aspek_teknis_4:number;
  aspek_teknis_5a:number;
  aspek_teknis_5b:number;
  aspek_teknis_5c:number;
  aspek_teknis_5d:number;
  aspek_teknis_5e:number;
  aspek_non_teknis_1:number;
  aspek_non_teknis_2:number;
  aspek_non_teknis_3:number;
  aspek_kepribadian_1:number;
  aspek_kepribadian_2:number;
  aspek_kepribadian_3:number;
  aspek_kepribadian_4:number;
  aspek_kepribadian_5:number;
  aspek_kepemimpinan_1:number;
  aspek_kepemimpinan_2:number;
  aspek_kepemimpinan_3:number;
  dataform = {};
  linkfiresotre = AngularFirestoreCollection;
  datasource = ELEMENT_DATA;
  constructor(
    public dialogRef: MatDialogRef<FormEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,db:AngularFirestore) {
      this.linkfiresotre = db.collection('FormulirPenilaianKerja');
      this.datasource=data.data;
      this.aspek_teknis_1 = data.data.aspek_teknis_1;
      this.aspek_teknis_2 = data.data.aspek_teknis_2;
      this.aspek_teknis_3 = data.data.aspek_teknis_3;
      this.aspek_teknis_4 = data.data.aspek_teknis_4;
      this.aspek_teknis_5a = data.data.aspek_teknis_5a;
      this.aspek_teknis_5b = data.data.aspek_teknis_5b;
      this.aspek_teknis_5c = data.data.aspek_teknis_5c;
      this.aspek_teknis_5d = data.data.aspek_teknis_5d;
      this.aspek_teknis_5e = data.data.aspek_teknis_5e;
      this.aspek_non_teknis_1 = data.data.aspek_non_teknis_1;
      this.aspek_non_teknis_2 = data.data.aspek_non_teknis_2;
      this.aspek_non_teknis_3 = data.data.aspek_non_teknis_3;
      this.aspek_kepribadian_1 = data.data.aspek_kepribadian_1;
      this.aspek_kepribadian_2 = data.data.aspek_kepribadian_2;
      this.aspek_kepribadian_3 = data.data.aspek_kepribadian_3;
      this.aspek_kepribadian_4 = data.data.aspek_kepribadian_4;
      this.aspek_kepribadian_5 = data.data.aspek_kepribadian_5;
      this.aspek_kepemimpinan_1 = data.data.aspek_kepemimpinan_1;
      this.aspek_kepemimpinan_2 = data.data.aspek_kepemimpinan_2;
      this.aspek_kepemimpinan_3 = data.data.aspek_kepemimpinan_3;
    }
   

  update_data(unit_kerja,nama,nip,jabatan,aspek_teknis_1,aspek_teknis_2,aspek_teknis_3,aspek_teknis_4,aspek_teknis_5a,aspek_teknis_5b,aspek_teknis_5c,aspek_teknis_5d,aspek_teknis_5e,aspek_non_teknis_1,aspek_non_teknis_2,aspek_non_teknis_3,aspek_kepribadian_1,aspek_kepribadian_2,aspek_kepribadian_3,aspek_kepribadian_4,aspek_kepribadian_5,aspek_kepemimpinan_1,aspek_kepemimpinan_2,aspek_kepemimpinan_3): void {
  this.dataform = {
    nama:nama,
    nip:nip,
    jabatan:jabatan,
    unit_kerja:unit_kerja,
    aspek_teknis_1:aspek_teknis_1,
    aspek_teknis_2:aspek_teknis_2,
    aspek_teknis_3:aspek_teknis_3,
    aspek_teknis_4:aspek_teknis_4,
    aspek_teknis_5a:aspek_teknis_5a,
    aspek_teknis_5b:aspek_teknis_5b,
    aspek_teknis_5c:aspek_teknis_5c,
    aspek_teknis_5d:aspek_teknis_5d,
    aspek_teknis_5e:aspek_teknis_5e,
    aspek_non_teknis_1:aspek_non_teknis_1,
    aspek_non_teknis_2:aspek_non_teknis_2,
    aspek_non_teknis_3:aspek_non_teknis_3,
    aspek_kepribadian_1:aspek_kepribadian_1,
    aspek_kepribadian_2:aspek_kepribadian_2,
    aspek_kepribadian_3:aspek_kepribadian_3,
    aspek_kepribadian_4:aspek_kepribadian_4,
    aspek_kepribadian_5:aspek_kepribadian_5,
    aspek_kepemimpinan_1:aspek_kepemimpinan_1,
    aspek_kepemimpinan_2:aspek_kepemimpinan_2,
    aspek_kepemimpinan_3:aspek_kepemimpinan_3,
    // nilai_rata_rata:nilai_rata_rata,
  };
    this.linkfiresotre.doc(this.data.data.id).update(this.dataform);
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
