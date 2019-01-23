import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { timer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private ref: MatDialogRef<{}, any>;

  constructor(private dialog: MatDialog) { }

  open(componentOrTemplateRef: ComponentType<{}> | TemplateRef<{}>, config?: MatDialogConfig<any>) {
    const ref = this.dialog.open(componentOrTemplateRef, config);
    return timer(0).pipe(
      map(() => (this.ref = ref))
    );
  }

  close(): Observable<{}> {
    return timer(0).pipe(
      map(() => {
        this.ref.close();
        return {};
      }),
    );
  }
}
