import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toHome() {
    document
      .getElementById('home')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  toAbout() {
    document
      .getElementById('about')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  toService() {
    document.getElementById('service').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  toExperience() {
    document
      .getElementById('experience')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  toWorks() {
    document
      .getElementById('works')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  toContact() {
    document
      .getElementById('contact')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
