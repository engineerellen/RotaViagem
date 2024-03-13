import { Component, OnInit } from '@angular/core';
import { rotasService } from '../rotas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { rotas } from '../rotas';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
     
  id!: string;
  rotas!: rotas;
  form!: FormGroup;
 
  constructor(
    public rotasService: rotasService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
        
    this.rotasService.find(this.id).subscribe((data: rotas)=>{
      this.rotas = data;
    });

    this.form = new FormGroup({
    });
  }
}