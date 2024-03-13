import { Component, OnInit } from '@angular/core';
import { rotasService } from '../rotas.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
   
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  form!: FormGroup;
 
  constructor(
    public rotasService:  rotasService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      origem: new FormControl('', [Validators.required]),
      destino: new FormControl('', Validators.required),
      valor: new FormControl('', Validators.required)
    });
  }
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.rotasService.create(this.form.value).subscribe(res => {
         console.log('Rota Criada!');
         this.router.navigateByUrl('rotas/index');
    })
  }
  
}