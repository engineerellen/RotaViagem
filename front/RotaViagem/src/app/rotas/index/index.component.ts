import { Component, OnInit } from '@angular/core';
import { coursesService } from '../courses.service';
import { courses } from '../courses';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  coursess: courses[] = [];

  constructor(public coursesService: coursesService) { }

  ngOnInit(): void {
    this.coursesService.getAll().subscribe((data: courses[]) => {
      this.coursess = data;
      console.log(this.coursess);
    })
  }

  deletecourses(id: string) {
    if (window.confirm("Do you you want to delete this course?")) {
      this.coursesService.delete(id).subscribe(res => {
        this.coursess = this.coursess.filter(item => item.id !== id);
        console.log('course deleted!');
      })
    }
  }
}