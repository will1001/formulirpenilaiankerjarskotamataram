import { Component, OnInit ,Inject} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  data: any;
}

export interface PeriodicElement {
  unit_kerja: string;
  nama: string;
  nip: number;
  jabatan: string;
  ket: string;
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
}


const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  students: any;
  dataSource = ELEMENT_DATA;
  total:any;
  constructor(
    public dialogRef: MatDialogRef<PreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,db:AngularFirestore) {
      console.log(data.data);
      this.dataSource=data.data;
      this.total=0;
      for( var el in data.data ) {
        if( data.data[el]<20 ) {
          this.total += parseInt( data.data[el],10 );
        }
      }
      this.total = this.total/20;
      console.log(this.total);


    }
  ngOnInit() {
  }

}
