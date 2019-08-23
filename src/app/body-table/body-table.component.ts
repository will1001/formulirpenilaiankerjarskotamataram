import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormEditComponent } from '../form-edit/form-edit.component';
import { FormAddComponent } from '../form-add/form-add.component';
import { DeletePopUpComponent } from '../delete-pop-up/delete-pop-up.component';


export interface PeriodicElement {
  nama: string;
  nip: number;
  jabatan: string;
  ket: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {nama: 'andi', nip: 12029376493, jabatan: 'perawat',ket : ''},
  {nama: 'Budi', nip: 12345678999, jabatan: 'Dokter',ket : ''},
];

@Component({
  selector: 'app-body-table',
  templateUrl: './body-table.component.html',
  styleUrls: ['./body-table.component.css']
})
export class BodyTableComponent implements OnInit {

  displayedColumns: string[] = ['nama', 'nip', 'jabatan','ket'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  Add(): void {
    this.dialog.open(FormAddComponent);
  }

  Edit(): void {
    this.dialog.open(FormEditComponent);
  }

  Delete(): void {
    this.dialog.open(DeletePopUpComponent);
  }

  ngOnInit() {
  }

}