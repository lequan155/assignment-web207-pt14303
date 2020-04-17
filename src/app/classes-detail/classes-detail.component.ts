import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from '../school.service';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-classes-detail',
  templateUrl: './classes-detail.component.html',
  styleUrls: ['./classes-detail.component.css']
})
export class ClassesDetailComponent implements OnInit {
  classData = null;
  
  constructor(private actiRoute: ActivatedRoute,
    private classService: ClassService,
    private route: Router) { }

  ngOnInit() {
    this.actiRoute.paramMap.subscribe(param => {
      let schoolId = param.get('id');
      let classId = param.get('idc')
      this.classService.getClassById(schoolId,classId).subscribe(data => {
        this.classData = data;
      });
    });
  }

  removeClass() {
    let conf = confirm("Bạn muốn xoá lớp này?");
    if (conf) {
      this.actiRoute.paramMap.subscribe(param => {
      let schoolId = param.get('id');
      let classId = param.get('idc')
      this.classService.removeClassById(schoolId,classId).subscribe(data => {
        this.route.navigate(['school-detail/',schoolId]);
      });
    });
    }
  }

}