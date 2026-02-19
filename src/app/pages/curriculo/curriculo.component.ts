import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculo',
  standalone: true,
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss'],
})
export class CurriculoComponent {
  cvUrl = 'assets/images/docs/Eduardo_Tristao_Melo_CV_Frontend.pdf';
}
