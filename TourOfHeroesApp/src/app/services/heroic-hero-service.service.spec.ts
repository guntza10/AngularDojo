import { TestBed } from '@angular/core/testing';

import { HeroicHeroServiceService } from './heroic-hero-service.service';

describe('HeroicHeroServiceService', () => {
  let service: HeroicHeroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroicHeroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
