import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'drag-n-drop',
  standalone: true,
  imports: [CdkDropList, CdkDrag, CdkDropListGroup],
  templateUrl: './drag-ndrop.component.html',
  styleUrl: './drag-ndrop.component.scss'
})
export class DragNdropComponent {
  @ViewChild('newDropArea',{static:false}) newDropArea: ElementRef = new ElementRef(HTMLElement);
  data:string[][] = [['1', '2', '3', '4'],['5', '6', '7', '8', '9']];
  boxcontents1:string[] = ['10','11','12'];
  newdata:string[] = [];
  showNewArea=false;
  toggleNewArea(visible:boolean){
    this.showNewArea=visible;
  }
  private insideNewArea (b:any, x:number, y:number) {
      return b.offsetLeft <= x && x <= b.offsetLeft + b.offsetWidth && b.offsetTop <= y && y <= b.offsetTop + b.offsetHeight;
  }
  drop(event: CdkDragDrop<string[]>) {
    let b = this.newDropArea.nativeElement;
    if(this.insideNewArea(b,event.dropPoint.x,event.dropPoint.y)){
      this.newrowdrop(event);
    }else{
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
    this.toggleNewArea(false);
    this.data = this.data.filter((e)=>{
      return e.length>0;
    });
  }
  newrowdrop(event: CdkDragDrop<string[]>){
    this.toggleNewArea(false);
    transferArrayItem(
      event.previousContainer.data,
      this.newdata,
      event.previousIndex,
      event.currentIndex,
    );
    if (this.newdata.length>0) {
      this.data.push(JSON.parse(JSON.stringify(this.newdata)));
      this.newdata=[];
    }
    this.data = this.data.filter((e)=>{
      return e.length>0;
    });
  }
}
