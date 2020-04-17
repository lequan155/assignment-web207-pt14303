import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-schools-detail',
  templateUrl: './schools-detail.component.html',
  styleUrls: ['./schools-detail.component.css']
})
export class SchoolsDetailComponent implements OnInit {
  schoolData = null;
  constructor(private actiRoute: ActivatedRoute,
    private schoolService: SchoolService,
    private route: Router) { }

  ngOnInit() {
    this.actiRoute.paramMap.subscribe(param => {
      let schoolId = param.get('id');
      this.schoolService.getSchoolById(schoolId).subscribe(data => {
        this.schoolData = data;
      });
    });
  }

  removeSchool() {
    let conf = confirm("Bạn muốn xoá trường này?");
    if (conf) {
      this.schoolService.removeSchoolById(this.schoolData.id).subscribe(data => {
        this.route.navigate(['']);
      });
    }
  }

}