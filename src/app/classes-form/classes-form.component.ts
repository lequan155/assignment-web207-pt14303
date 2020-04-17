import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from '../class.service';
import { Class } from '../class';

@Component({
  selector: 'app-classes-form',
  templateUrl: './classes-form.component.html',
  styleUrls: ['./classes-form.component.css']
})
export class ClassesFormComponent implements OnInit {
  
  formClass = new FormGroup({
    id : new FormControl(null),
    schoolId : new FormControl(null),
    name : new FormControl(''),
    room_number : new FormControl(null),
    total_students : new FormControl(null),
    main_teacher : new FormControl('')
  });
  constructor(private classService: ClassService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  this.activeRoute.paramMap.subscribe(param =>
    {
      let schoolId = param.get('id');
      let classId = param.get('idc');
      if(schoolId != null && classId != null){
        this.classService.getClassById(schoolId,classId).subscribe(data=>{
          this.formClass.setValue(data);
        });
      }
    })
  }

  saveClass(){
    this.activeRoute.paramMap.subscribe(param =>
    {
      let schoolId = param.get('id');
      let classId = param.get('idc');
    if(this.formClass.value.id != null){
      this.classService.editClass(schoolId,this.formClass.value).subscribe(data=>{
        this.route.navigate(['school-detail/',schoolId]);
      })
    }
    else{
    this.classService.addNewClass(schoolId,this.formClass.value).subscribe(data=>{
      this.route.navigate(['school-detail/',schoolId]);
    })
    }
    })
  }

}