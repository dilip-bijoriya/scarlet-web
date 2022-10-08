import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataShareService } from './data-share.service';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class AuthGuardService {
  cookieValue: any;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private dataShareService: DataShareService
  ) {}

  canActivate(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.dataShareService.changeMessage('CHECK_LOGIN');
      if (this.cookieService.check('scarlet_website')) {
        resolve(true);
      } else {
        this.router.navigateByUrl('/auth/login');
        resolve(false);
      }
    });  
  }
}

@Injectable()
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
