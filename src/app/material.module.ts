import {NgModule} from '@angular/core'
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSliderModule, MatToolbarModule} from '@angular/material'

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
  ]
})
export class MaterialModule {
}
