import { Component, OnInit } from '@angular/core';
import { coursesService } from '../courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { courses } from '../courses';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
     
  id!: string;
  courses!: courses;
  form!: FormGroup;
 
  constructor(
    public coursesService: coursesService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
        
    this.coursesService.find(this.id).subscribe((data: courses)=>{
      this.courses = data;
    });

    this.form = new FormGroup({
    });
  }
}