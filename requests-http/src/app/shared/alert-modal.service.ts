import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCESS = 'success',
}

@Injectable({
  providedIn: 'root',
})
export class AlertModalService {
  constructor(private modalService: BsModalService) {}

  private showAlert(message: string, type: AlertTypes, dismisTimeout?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismisTimeout) {
      setTimeout(() => bsModalRef.hide(), dismisTimeout);
    }
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSucesso(message: string) {
    this.showAlert(message, AlertTypes.SUCESS, 3000);
  }

  showConfirm(
    title: string,
    message: string,
    okTxt?: string,
    cancelTxt?: string,
    dismisTimeout?: number
  ) {
    const bsModalRef: BsModalRef = this.modalService.show(
      ConfirmModalComponent
    );
    bsModalRef.content.title = title;
    bsModalRef.content.message = message;

    if (okTxt) {
      bsModalRef.content.okTxt = okTxt;
    }
    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    if (dismisTimeout) {
      setTimeout(() => bsModalRef.hide(), dismisTimeout);
    }
  }
}
