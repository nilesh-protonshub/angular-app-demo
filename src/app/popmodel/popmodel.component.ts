import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-popmodel',
  templateUrl: './popmodel.component.html',
  styleUrls: ['./popmodel.component.css']
})
export class PopmodelComponent  {

    constructor(
    public dialogRef: MatDialogRef<PopmodelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}