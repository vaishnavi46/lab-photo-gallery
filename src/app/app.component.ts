import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <div class="container">
  <div class="gallery">
      <figure class="gallery__item gallery__item--1">
          <img src="../assets/img/Jeff.jpg" alt="Amazon_Jeff" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--2">
          <img src="../assets/img/Marissa.jpg" alt="Yahoo_Marissa" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--3">
          <img src="../assets/img/Mark.jpg" alt="Facebook_Mrk" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--4">
          <img src="../assets/img/satya.jpg" alt="Microsoft_Satya" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--5">
          <img src="../assets/img/sundhar.jpg" alt="Google_Sundar" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--6">
          <img src="../assets/img/Tim.jpg" alt="Apple_Tim" class="gallery__img">
      </figure>
  </div>
</div>
<app-footer> </app-footer>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-photo-gallery';
}
