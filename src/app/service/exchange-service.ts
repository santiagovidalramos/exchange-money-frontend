import {Injectable} from "@angular/core";
import {HttpClient ,HttpErrorResponse} from "@angular/common/http";
import {Observable,throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import { environment } from 'src/environments/environment';
import {Request} from 'src/app/model/request';
import {BaseResponse} from 'src/app/model/base-response';

@Injectable()
export class ExchangeService {

    private baseUrl= environment.baseUrl +'/api/change/money';
    constructor(private http:HttpClient) {

    }
    connect(request:Request): Observable<BaseResponse> {
        return <Observable<BaseResponse>>this.http.post(`${this.baseUrl}`, request);
    }
}