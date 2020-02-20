import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListManagerComponent } from './list-manager/list-manager.component';
import { OverviewHomepageComponent } from './overview-homepage/overview-homepage.component';

const appRoutes: Routes = [
  //{ path: '', component: ListManagerComponent },
  {
    path: 'overview',
    component: OverviewHomepageComponent
  },
  {
    path: '',
    redirectTo: '/overview', pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
