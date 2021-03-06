import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridAllModule, TreeGridModule } from '@syncfusion/ej2-angular-treegrid';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridDemoComponent } from './table/grid-demo/grid-demo.component';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonAllModule , CheckBoxAllModule} from '@syncfusion/ej2-angular-buttons';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { SparklineAllModule } from '@syncfusion/ej2-angular-charts';
@NgModule({
  declarations: [
    AppComponent,
    GridDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeGridModule,
    TreeGridAllModule,       
    NumericTextBoxAllModule, 
    ToolbarModule, 
    DropDownListAllModule, 
    ButtonAllModule, 
    DialogModule, 
    MultiSelectAllModule, 
    CheckBoxAllModule, 
    ReactiveFormsModule, 
    FormsModule, 
    DatePickerModule, 
    SparklineAllModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
