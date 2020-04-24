import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule,MatFormFieldModule,MatInputModule, MatButtonModule, MatSnackBarModule, MatProgressBarModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { ExchangeService } from './service/exchange-service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule ,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  providers: [ExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
