import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal',
  templateUrl: './ngbd-modal.component.html',
  styleUrls: ['./ngbd-modal.component.css']
})
export class NgbdModalComponent {
  @ViewChild('yearModal') yearModal: any;
  @Input() year: number = 1;
  @Input() rawMaterialsStorageCosts: number = 0;
  @Input() staffSalaries: number = 0;
  @Input() products: number = 0;
  @Input() spoilage: number = 0;
  closeResult = '';

  constructor(private modalService: NgbModal) { }

  open() {
    this.modalService.open(this.yearModal, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

