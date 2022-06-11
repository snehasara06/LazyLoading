import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './admin/list/list.component';
import { LoginComponent } from './admin/login/login.component';

const routes: Routes = [
//  {path:"admin",loadChildren:()=>import('./admin/admin.module')
// .then(mod=>mod.AdminModule)},
//  { path: 'a', loadChildren: () => import('./modulea/modulea.module').then(m => m.ModuleaModule) },
//  { path: 'b', loadChildren: () => import('./moduleb/moduleb.module').then(m => m.ModulebModule) }
{ path: 'a', loadChildren: () => import('./modulea/modulea.module').then(m => m.ModuleaModule) },
{ path: 'b', loadChildren: () => import('./moduleb/moduleb.module').then(m => m.ModulebModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
