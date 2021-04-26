import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Expert } from '../models/expert.model';
import { environment } from '../../../../environments/environment';


const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class ExpertsService {

  private base_url: string = environment.base_url;

  constructor( private http: HttpClient ) { }

  /**
   * Get all experts with options params search
   * @param filterParams Optionals params to search
   * @returns List of Experts
   */
  getAll(filterParams: any): Observable<Expert[]> {

    console.log('Filtros en Servicio: ', filterParams);

    let url = `${ base_url }/expertos`;

    url = this.getUrlWithParams(filterParams, url);
  
      
      console.log('URL BACK: ', url);

    return this.http.get<Expert[]>(url)
        .pipe(
          catchError((err: HttpErrorResponse) => {

            return throwError( err );
    
          })
        )
    
  }

  /**
   * Get num total of experts
   * @returns Num total experts
   */
   getTotalExperts(): Observable<number> {

    let url = `${ base_url }/expertos/total`;

    return this.http.get<number>(url)
        .pipe(
          catchError((err: HttpErrorResponse) => {

            return throwError( err );
    
          })
        )
    
  }

  /**
   * Create a new expert
   * @returns expert created
   */
   createExpert( expert: any ): Observable<any> {
    return this.http.post<any>(`${ this.base_url }/expertos`, expert )
    .pipe(
      catchError((err: HttpErrorResponse) => {

        return throwError( err );

      })
    )
  }

  /**
   * Update an expert
   * @returns expert updated
   */
   updateExpert( expert: Expert ): Observable<any> {
    return this.http.put<Expert>(`${ this.base_url }/expertos/${expert.id}`, expert )
    .pipe(
      catchError((err: HttpErrorResponse) => {

        return throwError( err );

      })
    )
  }


  /**
   * Build the url to make the http request
   * @param filterParams Optionals params to search
   * @param url base url to make the http request
   * @returns url(string) to make the http request
   */
   private getUrlWithParams(filterParams: any, url:string):string {

    let  firstParam:boolean = true;

    if (filterParams.name != ''){
      firstParam = false;
      url = url + '?name=' + filterParams.name;
    }

    if (filterParams.tag != ''){

      if(firstParam){
        firstParam = false;
        url = url + '?tag=' + filterParams.tag;
      }else{
        url = url + '&tag=' + filterParams.tag;
      }
        
    }

    if (filterParams.modality != ''){

      if(firstParam){
        firstParam = false;
        url = url + '?modality=' + filterParams.modality;
      }else{
        url = url + '&modality=' + filterParams.modality;
      }
        
    }

    if (filterParams.status != ''){

      if(firstParam){
        firstParam = false;
        url = url + '?status=' + filterParams.status;
      }else{
        url = url + '&status=' + filterParams.status;
      }
        
    }

    if (filterParams.score != ''){

      if(firstParam){
        firstParam = false;
        url = url + '?score=' + filterParams.score;
      }else{
        url = url + '&score=' + filterParams.score;
      }
        
    }

    if (filterParams.page != -1){

      if(firstParam){
        firstParam = false;
        url = url + '?page=' + filterParams.page;
      }else{
        url = url + '&page=' + filterParams.page;
      }
        
    }

    if (filterParams.limit != -1){

      if(firstParam){
        firstParam = false;
        url = url + '?limit=' + filterParams.limit;
      }else{
        url = url + '&limit=' + filterParams.limit;
      }
      
    }

    return url;
  }
}
