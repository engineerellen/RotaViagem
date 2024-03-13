import { Component, OnInit } from '@angular/core';
import { rotasService } from '../rotas.service';
import { rotas } from '../rotas';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  rotass: rotas[] = [];

  constructor(public rotasService: rotasService) { }

  ngOnInit(): void {
    this.rotasService.getAll().subscribe((data: rotas[]) => {
      this.rotass = data;
      console.log(this.rotass);
    })
  }

  deleterotas(id: string) {
    if (window.confirm("Do you you want to delete this course?")) {
      this.rotasService.delete(id).subscribe(res => {
        this.rotass = this.rotass.filter(item => item.id !== id);
        console.log('course deleted!');
      })
    }
  }
}