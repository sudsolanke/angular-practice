import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareSub } from './share-sub';

describe('ShareSub', () => {
  let component: ShareSub;
  let fixture: ComponentFixture<ShareSub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareSub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareSub);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
