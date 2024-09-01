import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/modules/shared/services/config.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private configService: ConfigService) { }

  /**
   * The function intercepts HTTP requests and adds an Authorization header with a Bearer token if
   * available.
   * @returns The `intercept` function returns an Observable of type `HttpEvent<any>`.
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const config = this.configService.getConfig();

    if (config) {
      const apiToken = config.apiToken;

      const clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${apiToken}`
        }
      });
      return next.handle(clonedReq);
    } else {
      return next.handle(req);
    }
  }
}
