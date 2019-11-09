import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, CdkDragEnter, CdkDragSortEvent, CdkDragExit, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {shuffle} from '../utils';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
  arr = ['0', '1', '2', '3'];
  items = [];

  /*drop(event: CdkDragDrop<string[]>) {
    console.log(event);
  }*/

  ngOnInit() {
    // this.items = shuffle(this.arr);
    this.items = this.arr;
  }

  enter(event: CdkDragExit<string[]>) {
    console.log(event);
  }

  drop(event: CdkDragDrop<string[]>) {
    const previous = event.previousContainer.data[0];
    const current = event.container.data[0];
    this.items.forEach((value, index) => {
      if (this.items[index] === previous) {
        this.items[index] = current;
      }
      if (value === current) {
        this.items[index] = previous;
      }
    });

    let result = true;
    this.items.forEach((value, index) => {
      if (value !== '' + index) {
        result = false;
      }
    });

    if (result) {

    }
    /*if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }*/
  }

}
