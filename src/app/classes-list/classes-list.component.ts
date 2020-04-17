import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {
  classes = [];
  constructor(private actiRoute: ActivatedRoute,private classService: ClassService, private route: Router) { }

  ngOnInit() {
    this.actiRoute.paramMap.subscribe(param => {
      let schoolId = param.get('id');
      console.log(schoolId);
      this.classService.getListClasses(schoolId).subscribe(data =>{
      this.classes = data;
    });
      })
  }

}