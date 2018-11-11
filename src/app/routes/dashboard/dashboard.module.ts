import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { Dashboardv1Component } from './dashboardv1/dashboardv1.component';
import { NavtreeComponent } from '../../layout/navtree/navtree.component';

const routes: Routes = [
    { path: '', redirectTo: 'v1' },
    { path: 'v1', component: Dashboardv1Component }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        NavtreeComponent,
        Dashboardv1Component
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardModule { }
