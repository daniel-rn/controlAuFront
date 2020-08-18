import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EspelhoService } from 'src/app/services/espelho.service';


@Component({
  selector: 'app-espelho-detalhe',
  templateUrl: './espelho-detalhe.component.html',
  styleUrls: ['./espelho-detalhe.component.css']
})
export class EspelhoDetalheComponent implements OnInit {

  id: number;
  curso: any;

  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: EspelhoService) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.curso = this.cursoService.getEspelho(this.id);

      if(this.curso == null){
        this.router.navigate(['/naoEncontrado']);
      }
    });
  }

  ngOndestroy() {
    this.inscricao.unsubscribe();
  }

 
}
