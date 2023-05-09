import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private welcomeMessage: string = "Welcome to my first Angular app!";

  // lifecycle hook
  constructor() {
    console.log("HomeComponent constructor called!");
  }

  ngOnInit(): void {
    console.log("HomeComponent ngOnInit called!");
  }

  ngDoCheck(): void {
    console.log("HomeComponent ngDoCheck called!");
  }

  ngAfterContentInit(): void {
    console.log("HomeComponent ngAfterContentInit called!");
  }

  ngAfterContentChecked(): void {
    console.log("HomeComponent ngAfterContentChecked called!");
  }

  ngAfterViewInit(): void {
    console.log("HomeComponent ngAfterViewInit called!");
  }

  ngAfterViewChecked(): void {
    console.log("HomeComponent ngAfterViewChecked called!");
  }

  ngOnDestroy(): void {
    console.log("HomeComponent ngOnDestroy called!");
  }

  public getWelcomeMessage(): string {
    return this.welcomeMessage;
  }

  public setWelcomeMessage(welcomeMessage: string): void {
    this.welcomeMessage = welcomeMessage;
  }

}
