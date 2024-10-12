import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'drag-n-drop',
  standalone: true,
  imports: [CdkDropList, CdkDrag],
  templateUrl: './drag-ndrop.component.html',
  styleUrl: './drag-ndrop.component.scss'
})
export class DragNdropComponent {
  boxcontents1 = ['1', '2', '3', '4'];

  boxcontents2 = ['5', '6', '7', '8', '9'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
