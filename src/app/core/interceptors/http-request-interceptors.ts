import { ErrorService } from './../../shared/services/error.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
// import { LinearLoaderService } from '../../shared/components/linear-loader/linear-loader.service';
import { TimerService } from '../../shared/services/timer.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  apiCallCount = 0;
  constructor(
    // public linearLoaderService: LinearLoaderService,
    private spinner: NgxSpinnerService,
    private errorService: ErrorService,
    private timer: TimerService
  ) { }

  //identifies and handles a given HTTP Request
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.headers.has('startTimer')) {
      this.timer.setTimer();
    }
    this.apiCallCount++
    this.spinner.show();
    let body = request.body;
    let headers;

    //add authorization bearer token to headers taking it from local storage
    if (localStorage.getItem('Authorization') === null) {
      headers = request.headers.set('Authorization', '');
    } else {
      headers = request.headers.set(
        'Authorization',
        localStorage.getItem('Authorization')
      );
      
    }

    //add Content-Type (media type) of the resource prior to any encoding applied for sending
    if (request.headers.get('ignore_headers') !== 'true') {
      headers = headers.set('Content-Type', 'application/json');
      headers = headers.set('Content-Type','Access-Control-Allow-Origin');
      headers = headers.set('Content-Security-Policy', 'default-src');
    }else {
      headers = headers.delete('Authorization')
    }
    const updatedRequest = request.clone({
      headers,
      body,
    });
    return next.handle(updatedRequest).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            event = event.clone({
              //modifies HTTP response body
              body: this.modifyBody(event.body, event.status),
            });
          }
          return event;
        },
        (error) => {
          this.errorService.errorHandler(error);
        }
      ),
      finalize(() => {
        this.apiCallCount--;
        if (this.apiCallCount === 0) {
          this.spinner.hide();
        }
      })
    );
  }

  /**
   * Method that modifies event body
   * @param body
   * @param status
   */
  private modifyBody(body: any, status: any) { }
}
