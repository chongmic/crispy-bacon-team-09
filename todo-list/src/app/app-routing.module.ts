import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewHomepageComponent } from './homepage/overview-homepage/overview-homepage.component';

const appRoutes: Routes = [
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
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
