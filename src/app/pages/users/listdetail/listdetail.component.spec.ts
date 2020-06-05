import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdetailComponent } from './listdetail.component';
import { ActivatedRoute } from '@angular/router';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListdetailComponent', () => {
  let component: ListdetailComponent;
  let fixture: ComponentFixture<ListdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ ListdetailComponent ],
      providers: [ {provide: ActivatedRoute, useValue: ListdetailComponent} ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
