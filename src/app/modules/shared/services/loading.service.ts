import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingComponent } from '../components/loading/loading.component';

@Injectable({ providedIn: 'root' })
export class LoadingService {
    private loadingDialogRef: MatDialogRef<LoadingComponent> | null = null;

    constructor(private dialog: MatDialog) { }

    showLoading(): void {
        if (!this.loadingDialogRef) {
            this.loadingDialogRef = this.dialog.open(LoadingComponent, {
                disableClose: true,
            });
        }
    }

    hideLoading(): void {
        if (this.loadingDialogRef) {
            this.loadingDialogRef.close();
            this.loadingDialogRef = null;
        }
    }
}
