import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "../shared/shared.module";
import {HomeComponent} from "./home.component";
import {routing} from "./home.routing";

@NgModule({
    declarations: [HomeComponent],
    imports: [
        BrowserModule,
        routing,
        SharedModule.forRoot()
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModules{
    constructor(){}
}
