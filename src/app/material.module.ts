import {NgModule} from '@angular/core';
import {MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule
  ]
})
export class MaterialModule {
}
