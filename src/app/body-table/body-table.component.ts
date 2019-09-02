import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormEditComponent } from '../form-edit/form-edit.component';
import { FormAddComponent } from '../form-add/form-add.component';
import { DeletePopUpComponent } from '../delete-pop-up/delete-pop-up.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface PeriodicElement {
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

  displayedColumns: string[] = ['nama', 'nip', 'jabatan','ket'];
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
          ket: e.payload.doc.data()['unit_kerja'],
        };
      })
      this.dataSource = this.students;
    });
    
  }

  Add(): void {
    this.dialog.open(FormAddComponent);
  }

  Edit(): void {
    this.dialog.open(FormEditComponent);
  }

  Delete(id): void {
    this.dialog.open(DeletePopUpComponent, {
      data: {id:id,}
    });
  }

  ngOnInit() {
  }

}