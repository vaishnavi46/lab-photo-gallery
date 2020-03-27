import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <header><h1>{{title}}</h1></header>
  <div class="container">
  <div class="gallery">
      <figure class="gallery__item gallery__item--1">
          <img src="../assets/img/image-1.jpg" alt="Gallery image 1" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--2">
          <img src="../assets/img/image-2.jpg" alt="Gallery image 2" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--3">
          <img src="../assets/img/image-3.jpg" alt="Gallery image 3" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--4">
          <img src="../assets/img/image-4.jpg" alt="Gallery image 4" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--5">
          <img src="../assets/img/image-5.jpg" alt="Gallery image 5" class="gallery__img">
      </figure>
      <figure class="gallery__item gallery__item--6">
          <img src="../assets/img/image-6.jpg" alt="Gallery image 6" class="gallery__img">
      </figure>
  </div>
</div>
<footer> </footer>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-photo-gallery';
}
