import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorPickerService } from 'ngx-color-picker';
import { StandardComponent } from './standard/standard.component';

const routes: Routes = [
    { path: 'standard', component: StandardComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [ColorPickerService],
    declarations: [
        StandardComponent
    ],
    exports: [
        RouterModule
    ]
})
export class MonitorModule { }
