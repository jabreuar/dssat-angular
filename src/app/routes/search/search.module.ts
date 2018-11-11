import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { StandardComponent } from './standard/standard.component';


const routes: Routes = [
    { path: 'standard', component: StandardComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        StandardComponent
    ],
    exports: [
        RouterModule
    ]
})
export class SearchModule { }
