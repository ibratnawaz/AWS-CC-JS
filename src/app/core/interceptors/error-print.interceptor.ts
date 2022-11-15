import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationService } from '../notification.service';
import { retry, tap } from 'rxjs/operators';

@Injectable()
export class ErrorPrintInterceptor implements HttpInterceptor {
  constructor(private readonly notificationService: NotificationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(3),
      tap({
        error: (e) => {
          const url = new URL(request.url);
          console.log(e.status, e.error.message);
          let message = '';
          if (e.status === 401 || e.status === 403) {
            message = `You are not authorized to perform this action.`;
          } else {
            message = `Request to "${url.pathname}" failed.`;
          }
          this.notificationService.showError(
            `${message} Check the console for more details.`,
            0
          );
        },
      })
    );
  }
}
