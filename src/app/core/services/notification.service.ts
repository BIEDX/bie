import { Injectable } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarRef,
    TextOnlySnackBar,
} from '@angular/material/snack-bar';
@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(private _snakBar: MatSnackBar) { }

    notify(
        message: string,
        verticalPosition: 'top' | 'bottom' = 'top',
        panelClass: 'success' | 'error' | 'warning' | 'green-snackbar' = 'success'
    ): MatSnackBarRef<TextOnlySnackBar> {
        return this._snakBar.open(message, '', {
            verticalPosition,
            duration: 5000,
            panelClass: [panelClass],
        });
    }
}
