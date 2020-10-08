import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoalbumComponent } from './photoalbum.component';

describe('PhotoalbumComponent', () => {
  let component: PhotoalbumComponent;
  let fixture: ComponentFixture<PhotoalbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoalbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
