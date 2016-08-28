import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: 'client/modules/Home/home.module#HomeModules' },
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
