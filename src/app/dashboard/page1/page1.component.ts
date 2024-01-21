import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

}
