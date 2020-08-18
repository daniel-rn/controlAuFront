import { Component, OnInit } from '@angular/core';
import { EspelhoService } from '../services/espelho.service';
import { espelho, Datum } from './espelho';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-espelho',
  templateUrl: './espelho.component.html',
  styleUrls: ['./espelho.component.css']
})
export class EspelhoComponent implements OnInit {

  obsEspelhos: Observable<espelho[]>;
  data: espelho[];

  constructor(private cursoService: EspelhoService) {
   }

  ngOnInit(): void {
    this.obsEspelhos = this.cursoService.getEspelhos();
    this.obsEspelhos.subscribe( res => {this.data = res})
  }

}
