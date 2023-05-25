import { Component, Input, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { PalceholderService } from '../palceholder.service';
@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {


  constructor( private service:PalceholderService) { 

  }
  ngOnInit(): void {
    this.service.getpost().subscribe(
      res=> console.log(res));
    
  }

  @Input()
  titel !: string;

  message !:string;

}
