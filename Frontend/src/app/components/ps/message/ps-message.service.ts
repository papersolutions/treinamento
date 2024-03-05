import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PsMessageComponent } from './ps-message/ps-message.component';

@Injectable({
  providedIn: 'root'
})

export class PsMessageService {

  constructor(private snackBar: MatSnackBar) { }
  private defaultHPos = "right" as any;
  private defaultVPos= "bottom" as any;


  showInfo(text: string, buttonText = "OK") {
    this.snackBar.openFromComponent(PsMessageComponent, {
      horizontalPosition: this.defaultHPos,
      verticalPosition: this.defaultVPos,
      data: { message: text, buttonText: buttonText, type: "info" },
    },)
  }

  showError(text: string, buttonText = "OK") {
    this.snackBar.openFromComponent(PsMessageComponent, {
      horizontalPosition: this.defaultHPos,
      verticalPosition: this.defaultVPos,
      data: { message: text, buttonText: buttonText, type: "error" },
    },)
  }

  showSuccess(text: string, buttonText = "OK") {
    this.snackBar.openFromComponent(PsMessageComponent, {
      horizontalPosition: this.defaultHPos,
      verticalPosition: this.defaultVPos,
      data: { message: text, buttonText: buttonText, type: "success" },
    },)
  }

  showWarning(text: string, buttonText = "OK") {
    this.snackBar.openFromComponent(PsMessageComponent, {
      horizontalPosition: this.defaultHPos,
      verticalPosition: this.defaultVPos,
      data: { message: text, buttonText: buttonText, type: "warning" },
    },)
  }

    showMessage(text: string, buttonText = "OK", messageType: "info" | "error" | "success" | "warning") {
      this.snackBar.openFromComponent(PsMessageComponent, {
        horizontalPosition: this.defaultHPos,
        verticalPosition: this.defaultVPos,
        data: { message: text, buttonText: buttonText, type: messageType },
      },)
  }
}