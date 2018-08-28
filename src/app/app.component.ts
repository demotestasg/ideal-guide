import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  constructor() {
    this.doSomethingA();
    this.doSomethingB();
  }

  doSomethingA(): void {
    for (let i = 0; i < 100; i++) {
      if (i < 20) {
        if (i < 10) {
          if (i < 5) {
            if (i < 4) {
              if (i < 3) {
                if (i < 1) {
                  console.log("Wow!!!");
                }
              }
            }
          }
        }
      }
    }
  }

  doSomethingB(): void {
    for (let i = 0; i < 100; i++) {
      if (i < 20) {
        if (i < 10) {
          if (i < 5) {
            if (i < 4) {
              if (i < 3) {
                if (i < 1) {
                  console.log("Wow!!!");
                }
              }
            }
          }
        }
      }
    }
  }
}
