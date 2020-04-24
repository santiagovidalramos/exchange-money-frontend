import { Component, OnInit } from '@angular/core';
import { BaseResponse } from './model/base-response';
import { Request } from './model/request';
import { ExchangeService } from './service/exchange-service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Web de Intercambio de Moneda';
  request:Request;
  response:BaseResponse;
  currencies=["PEN","USD","EUR","MXN","COP","CLP","GBP","ARS","CAD","JPY"];
  loading:boolean;
  constructor(private exchangeService:ExchangeService,private _snackBar: MatSnackBar){
    
  }
  ngOnInit() {
    this.request=new Request();
  }
  isNotValid(){
    if(this.request && this.request.destiny && this.request.source && this.request.source!=this.request.destiny && this.request.amount && this.request.amount>0)
    return false;
    else return true;  
  }
  exchange(){
    this.loading=true;
    this.response=null;
    this.exchangeService.connect(this.request).subscribe(response=>{
      if(response.errorCode){
        this.showMessage('No se encontro los tipos de moneda.')
        return;
      }
      this.response=response;
    },error=>{
          console.log(error);
          if(error.error.errorCode && error.error.errorCode=="TYPE_EXCHANGE_NOT_FOUND")
            this.showMessage('No se encontro los tipos de moneda.')
          else
            this.showMessage('Ocurrio un error inesperado');
          this.loading=false 
      }
      ,()=>this.loading=false);
  }
  showMessage(message:string){
    this._snackBar.open(message,null, {duration: 2 * 1000,});
  }
}
