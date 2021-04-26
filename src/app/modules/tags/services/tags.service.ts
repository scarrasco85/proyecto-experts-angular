import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Tag } from '../models/tag.model';
import { environment } from '../../../../environments/environment';


//const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class TagsService {


  private base_url: string = environment.base_url;

  constructor( private http: HttpClient ) { }

  /**
   * Get all tags with options params search
   * @param filterParams Optionals params to search
   * @returns List of Tags
   */
  getAll(filterParams: any): Observable<Tag[]> {

    console.log('FilterParams In service:', filterParams);

    let url = `${ this.base_url }/etiquetas`;

    url = this.getUrlWithParams(filterParams, url);
  
      console.log('URL BACK: ', url);

    return this.http.get<Tag[]>(url)
        .pipe(
          catchError((err: HttpErrorResponse) => {

            // if (err.status === 401) {
            //   this.router.navigateByUrl('/login');
            // }
    
            return throwError( err );
    
          })
        )
    
  }

  /**
   * Get num total of tags
   * @returns Num total tags
   */
   getTotalTags(): Observable<number> {

    let url = `${ this.base_url }/etiquetas/total`;

    return this.http.get<number>(url)
        .pipe(
          catchError((err: HttpErrorResponse) => {

            return throwError( err );
    
          })
        )
    
  }

   /**
   * Create a new tag
   * @returns tag created
   */
    createTag( tag: Tag ): Observable<Tag> {
      return this.http.post<Tag>(`${ this.base_url }/etiquetas`, tag )
      .pipe(
        catchError((err: HttpErrorResponse) => {

          return throwError( err );
  
        })
      )
    }

  /**
   * Delete tag by Id
   * @returns void
   */
   deleteTagById( id: string ): Observable<any> {

    //let url = `${ base_url }/etiquetas/${ id }`;

    return this.http.delete<any>(`${ this.base_url }/etiquetas/${ id }`)
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

    // To load all tags in a SeletedButton
    if (filterParams.limit == -1){

      // Get Total tags
      this.getTotalTags().subscribe((response) => {
        filterParams.limit = response;
      });
      
    }

    if (filterParams.name != ''){
      firstParam = false;
      url = url + '?name=' + filterParams.name;
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
