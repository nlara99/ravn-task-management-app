import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    constructor(private snackBar: MatSnackBar) { }

    showSuccess(message: string): void {
        this.snackBar.open(message, 'Cerrar', {
            duration: 10000,
            panelClass: ['success-snackbar'],
        });
    }

    showError(message: string): void {
        this.snackBar.open(message, 'Cerrar', {
            duration: 10000,
            panelClass: ['error-snackbar'],
        });
    }
}
