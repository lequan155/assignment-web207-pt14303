export class Class {
  id: number;
  name: string;
  room_number: number;
  total_student: number;
  schoolId: string;
  main_teacher: string;
  constructor(id: number, name: string, room_number: number, total_student: number, schoolId: string,main_teacher: string){
    this.id = id;
    this.name = name;
    this.room_number = room_number;
    this.total_student = total_student;
    this.schoolId = schoolId;
    this.main_teacher = main_teacher;
  }
  
}