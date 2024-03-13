import { Component, OnInit } from '@angular/core';
import { rotasService } from '../rotas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { rotas } from '../rotas';
import { FormGroup, FormControl, Validators} from '@angular/forms';
     
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
      
  id!: string;
  rotas!: rotas;
  form!: FormGroup;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public rotasService: rotasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['Id'];
    this.rotasService.find(this.id).subscribe((data: rotas)=>{
      this.rotas = data;
    }); 
      
    this.form = new FormGroup({
      origem: new FormControl('', [Validators.required]),
      destino: new FormControl('', Validators.required),
      valor: new FormControl('', Validators.required)
    });
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.rotasService.update(this.id,
      this.form.value).subscribe((res:any) => {
         console.log('rotas alterado!');
         this.router.navigateByUrl('rotas/index');
    })
  }
   
}