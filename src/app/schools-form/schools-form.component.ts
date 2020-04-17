import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SchoolService } from '../school.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schools-form',
  templateUrl: './schools-form.component.html',
  styleUrls: ['./schools-form.component.css']
})
export class SchoolsFormComponent implements OnInit {
  formSchool = new FormGroup({
    id : new FormControl(null),
    name : new FormControl(''),
    logo : new FormControl(''),
    address : new FormControl(''),
    principal : new FormControl(''),
    province : new FormControl('')
  });

  saveSchool(){
    if(this.formSchool.value.id != null){
      this.schoolService.editSchool(this.formSchool.value).subscribe(data=>{
        this.route.navigate(['']);
      })
    }
    else{
    this.schoolService.addNewSchool(this.formSchool.value).subscribe(data=>{
      this.route.navigate(['']);
    })
    }
  }

  constructor(private schoolService: SchoolService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  this.activeRoute.paramMap.subscribe(param =>
    {
      let schoolId = param.get('id');
      if(schoolId != null){
        this.schoolService.getSchoolById(schoolId).subscribe(data=>{
          this.formSchool.setValue(data);
        });
      }
    })
  }
  

}