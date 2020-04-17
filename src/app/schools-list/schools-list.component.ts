import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-schools-list',
  templateUrl: './schools-list.component.html',
  styleUrls: ['./schools-list.component.css']
})
export class SchoolsListComponent implements OnInit {
  schools = [];
  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    this.schoolService.getListSchools().subscribe (data =>{
    this.schools = data;
    });
  }

}