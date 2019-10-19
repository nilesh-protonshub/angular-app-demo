import { Component, OnInit } from '@angular/core';
import {CommanService} from '../../common/services/comman.service';
import {MatDialog} from "@angular/material";
import { Subscription, timer } from 'rxjs';
import { PopmodelComponent } from '../popmodel/popmodel.component';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;
  displayedColumns: string[] = ['title', 'url', 'created_at', 'author'];
  subscription: Subscription;
  constructor(private dialog: MatDialog,private _CommanService: CommanService) { }


  ngOnInit() {
    const source = timer(0, 10000);
    this.subscription = source.subscribe(val => this.loopingFunction());
  	
  }

  show(id){
	const dialogRef = this.dialog.open(PopmodelComponent, {
      width: '500px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  

  loopingFunction()
  {
  	let aa  = this._CommanService.GetMethod().subscribe(
    data => {
    	this.data = (data) ? data :'';
    }
    );
  }
}
