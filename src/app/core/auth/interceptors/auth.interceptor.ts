import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('fitness_token') || '';

  const isAbsolute = /^https?:\/\//i.test(req.url);
  const isAsset = req.url.startsWith('/assets') || req.url.startsWith('assets/') || req.url.startsWith('./assets') || req.url.startsWith('../assets');
  const url = isAbsolute || isAsset ? req.url : `${environment.apiUrl}${req.url}`;

  const headers = req.headers.set('Accept', 'application/json');
  const authHeaders = token ? headers.set('Authorization', `Bearer ${token}`) : headers;

  const cloned = req.clone({ url, headers: authHeaders });
  return next(cloned);
};
