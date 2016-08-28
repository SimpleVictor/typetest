import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";

export const HomeRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch:"full"}
];


export const routing = RouterModule.forChild(HomeRoutes);
