import { Component, OnInit } from '@angular/core';
import { IposService } from '../ipos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-iposlist',
  templateUrl: './iposlist.component.html',
  styleUrls: ['./iposlist.component.css']
})
export class IposlistComponent implements OnInit {
  

  constructor(private iposservice:IposService) { }
  iposList: Observable<any []>; 
  ngOnInit() {
    this.iposservice.getAllIpos().subscribe(data =>{  
      this.iposList =data;  
  })

  }
}
