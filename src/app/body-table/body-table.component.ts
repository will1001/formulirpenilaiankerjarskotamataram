import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormEditComponent } from '../form-edit/form-edit.component';
import { FormAddComponent } from '../form-add/form-add.component';
import { DeletePopUpComponent } from '../delete-pop-up/delete-pop-up.component';
import { PreviewComponent } from '../preview/preview.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface PeriodicElement {
  unit_kerja: string;
  nama: string;
  nip: number;
  jabatan: string;
  ket: string;
}


const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-body-table',
  templateUrl: './body-table.component.html',
  styleUrls: ['./body-table.component.css']
})
export class BodyTableComponent implements OnInit {

  displayedColumns: string[] = ['unit_kerja','nama', 'nip', 'jabatan','ket'];
  items: Observable<any[]>;
  students: any;
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog,db: AngularFirestore) {
    this.items = db.collection('FormulirPenilaianKerja').snapshotChanges();
    this.items.subscribe(res => {
      this.students = res.map(e => {
        return {
          id: e.payload.doc.id,
          nama: e.payload.doc.data()['nama'],
          nip: e.payload.doc.data()['nip'],
          jabatan: e.payload.doc.data()['jabatan'],
          unit_kerja: e.payload.doc.data()['unit_kerja'],
          aspek_teknis_1:e.payload.doc.data()['aspek_teknis_1'],
          aspek_teknis_2:e.payload.doc.data()['aspek_teknis_2'],
          aspek_teknis_3:e.payload.doc.data()['aspek_teknis_3'],
          aspek_teknis_4:e.payload.doc.data()['aspek_teknis_4'],
          aspek_teknis_5a:e.payload.doc.data()['aspek_teknis_5a'],
          aspek_teknis_5b:e.payload.doc.data()['aspek_teknis_5b'],
          aspek_teknis_5c:e.payload.doc.data()['aspek_teknis_5c'],
          aspek_teknis_5d:e.payload.doc.data()['aspek_teknis_5d'],
          aspek_teknis_5e:e.payload.doc.data()['aspek_teknis_5e'],
          aspek_non_teknis_1:e.payload.doc.data()['aspek_non_teknis_1'],
          aspek_non_teknis_2:e.payload.doc.data()['aspek_non_teknis_2'],
          aspek_non_teknis_3:e.payload.doc.data()['aspek_non_teknis_3'],
          aspek_kepribadian_1:e.payload.doc.data()['aspek_kepribadian_1'],
          aspek_kepribadian_2:e.payload.doc.data()['aspek_kepribadian_2'],
          aspek_kepribadian_3:e.payload.doc.data()['aspek_kepribadian_3'],
          aspek_kepribadian_4:e.payload.doc.data()['aspek_kepribadian_4'],
          aspek_kepribadian_5:e.payload.doc.data()['aspek_kepribadian_5'],
          aspek_kepemimpinan_1:e.payload.doc.data()['aspek_kepemimpinan_1'],
          aspek_kepemimpinan_2:e.payload.doc.data()['aspek_kepemimpinan_2'],
          aspek_kepemimpinan_3:e.payload.doc.data()['aspek_kepemimpinan_3'],
        };
      })
      this.dataSource = this.students;
    });
    
  }

  Add(): void {
    this.dialog.open(FormAddComponent);
  }

  Edit(data): void {
    this.dialog.open(FormEditComponent, {
      data: {data:data}
    });
  }

  Delete(id): void {
    this.dialog.open(DeletePopUpComponent, {
      data: {id:id,}
    });
  }
  
  Preview(data): void {
    this.dialog.open(PreviewComponent, {
      data: {data:data,}
    });
  }
  
  Export(): void {
   
  }

  ngOnInit() {
  }

}