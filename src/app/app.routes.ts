import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { ChildpageComponent } from './childpage/childpage.component';
import { Loginpage1Component } from './loginpage1/loginpage1.component';
import { Loginpage2Component } from './loginpage2/loginpage2.component';
import { ActiveclrComponent } from './activeclr/activeclr.component';

export const routes: Routes = [
    {
        path:'dashboard',
       component:DashboardComponent,
    },
    {
        path:'login',
        component:LoginComponent,
        children:[
            {path:'page-1',component:Loginpage1Component},
            {path:'page-2',component:Loginpage2Component}
        ]
       
    },
    {
        path: 'activeclr',
        component:ActiveclrComponent
    }
];
