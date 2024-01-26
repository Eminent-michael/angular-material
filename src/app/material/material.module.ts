import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button'
import { MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'


const materialComponents = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  FormsModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialComponents
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule { }
