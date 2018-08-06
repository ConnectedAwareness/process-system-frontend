import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../../../app-routing.module";

import { DynamicFormComponent } from "./form/form.component";
import { DynamicFormElementComponent } from "./form-element/form-element.component";
import { DynamicTableComponent } from "./table/table.component";

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormElementComponent,
    DynamicTableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  entryComponents: [],
  providers: [],
  bootstrap: []
})
export class DynamicModule {}
