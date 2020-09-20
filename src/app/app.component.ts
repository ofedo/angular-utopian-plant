import { Component, AfterViewInit, ChangeDetectorRef, ViewChild } from '@angular/core';

import { Machine } from './model/machine';
import { Staff } from './model/staff';
import { RawMaterials } from './model/raw-materials';
import { Plan } from './model/plan';
import { NgbdModalComponent } from './ngbd-modal/ngbd-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(NgbdModalComponent) yearModal: NgbdModalComponent;

  year: number;
  plan: Plan;
  products: number;
  machines: Machine[];

  gameEnded: boolean;
 
  constructor(private ref: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    this.initNewGame();
    this.ref.detectChanges();
  }

  initPlan(): Plan {
    const years = Math.ceil(Math.random() * 4) + 1;
    const budget = Math.ceil(Math.random() * 4) * 1000 + 1000;
    const products = Math.ceil(budget / years);
    return new Plan(years, budget, products);
  }

  initNewGame() {
    this.year = 1;
    this.plan = this.initPlan();
    this.products = 0;
    this.machines = [];
    this.gameEnded = false;
  }

  buyMachine() {
    let m = new Machine();
    if (this.plan.budget >= m.cost) {
      this.plan.budget -= m.cost;
      this.machines.push(m);
    } else {
      alert('You are out of budget!');
    }
  }

  hireWorker(machine: Machine) {
    let s = new Staff();
    machine.staff.push(s);
    // if (this.plan.budget >= s.cost) {
    //   this.plan.budget -= s.cost;
    //   machine.staff.push(s);
    // } else {
    //   alert('You are out of budget!');
    // }
  }

  assignRawMaterial(machine: Machine) {
    let m = new RawMaterials();
    if (this.plan.budget >= m.cost) {
      this.plan.budget -= m.cost;
      machine.rawMaterials.push(m);
    } else {
      alert('You are out of budget!');
    }
  }

  advanceYear() {
    this.gotoNextYear();
    if (this.plan.budget < 0) {
      this.endGame();
    }
    if (this.year >= this.plan.years) {
      this.endGame();
    }
  }

  gotoNextYear() {
    let storageRawMaterials = 0;
    let staffSalaries = 0;
    let products = 0;
    let spoilage = 0;
    this.machines.forEach(m => {
      const process = m.process();
      products += process[0];
      spoilage += process[1];
      storageRawMaterials += m.rawMaterials.length;
      staffSalaries += m.staff.length * 100;
    });

    const rawMaterialsStorageCosts = storageRawMaterials * 100;
    this.plan.budget -= rawMaterialsStorageCosts + staffSalaries;

    this.yearModal.year = ++this.year;
    this.yearModal.rawMaterialsStorageCosts = rawMaterialsStorageCosts;
    this.yearModal.staffSalaries = staffSalaries;
    this.yearModal.products = products;
    this.yearModal.spoilage = spoilage;
    this.yearModal.open();

    this.products += products;
    // alert('Year is ' + this.year);
  }

  endGame() {
    this.gameEnded = true;
    // alert('end game!');
  }

}
