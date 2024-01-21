import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";

export const routes: Routes = [
   {
    path:':id',
    component: DashboardComponent,
    children: [
        {
            path:'page1',
            component: Page1Component,
        },
        {
            path:'page2',
            component: Page2Component,
        },

    ]
   } 
];