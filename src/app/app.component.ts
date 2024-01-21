import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BoxComponent } from './box/box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet,BoxComponent,RouterLinkActive],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproject';
  boxes: any[] = ['orange','green','yellow'];
  addfun(){
    this.boxes.push(1)
  }
 
}
