import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: 'login', loadChildren: () => import('@nx-test/auth').then(m => m.authRoutes)}
];
