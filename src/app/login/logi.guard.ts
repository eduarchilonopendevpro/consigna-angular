import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export const logiGuard: CanActivateFn = (route, state) => {
  return true;
};
