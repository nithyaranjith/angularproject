import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

}
