import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-machine-card',
  templateUrl: './machine-card.component.html',
  styleUrls: ['./machine-card.component.css']
})
export class MachineCardComponent {
  @Input() machine: any;
  @Input() index: number;

  @Output() assignRawMaterialEmitter = new EventEmitter();
  @Output() hireWorkerEmitter = new EventEmitter();

  constructor() { }

  assignRawMaterial() {
    this.assignRawMaterialEmitter.emit(this.machine);
  }

  hireWorker() {
    this.hireWorkerEmitter.emit(this.machine);
  }
}
