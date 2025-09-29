import 'zone.js';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesComponent } from './story-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Stories', () => {
  let component: StoriesComponent;
  let fixture: ComponentFixture<StoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [StoriesComponent]
      imports: [StoriesComponent,HttpClientModule,HttpClientTestingModule ] 

    })
    .compileComponents();

    fixture = TestBed.createComponent(StoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
