import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {
@ViewChild('hello') mytemplate!: ElementRef;
@Input() color = '';
isHidden = false;

hidebox(x: any){
  // this.isHidden = true;
  console.log(x);
  
}
}
