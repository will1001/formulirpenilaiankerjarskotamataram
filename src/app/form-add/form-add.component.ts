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
  checked = false;
  dataform = {};
  linkfiresotre = AngularFirestoreCollection;
  constructor(
    public dialogRef: MatDialogRef<FormAddComponent>,db:AngularFirestore) {
      this.linkfiresotre = db.collection('FormulirPenilaianKerja');
    }
   

  tambah_data(unit_kerja,nama,nip,jabatan,aspek_teknis_1,aspek_teknis_2,aspek_teknis_3,aspek_teknis_4,aspek_teknis_5a,aspek_teknis_5b,aspek_teknis_5c,aspek_teknis_5d,aspek_teknis_5e,aspek_non_teknis_1,aspek_non_teknis_2,aspek_non_teknis_3,aspek_kepribadian_1,aspek_kepribadian_2,aspek_kepribadian_3,aspek_kepribadian_4,aspek_kepribadian_5,aspek_kepemimpinan_1,aspek_kepemimpinan_2,aspek_kepemimpinan_3): void {
    console.log(aspek_teknis_1);
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
    this.linkfiresotre.add(this.dataform);
    this.dialogRef.close();
  }

  


  ngOnInit() {
  }

}
