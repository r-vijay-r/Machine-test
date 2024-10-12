import { Component } from '@angular/core';
import { DragNdropComponent } from './drag-ndrop/drag-ndrop.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DragNdropComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng1828';
}
