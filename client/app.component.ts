import { Component } from "@angular/core";

@Component({
    selector: "app",
    template: `<router-outlet></router-outlet>`
})
export class AppComponent {
    appName: string = "Angular 2 Express"
}
