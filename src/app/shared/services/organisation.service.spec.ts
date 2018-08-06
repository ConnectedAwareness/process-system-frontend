/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrganisationService } from './organisation.service';

describe('Service: Organisation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganisationService]
    });
  });

  it('should ...', inject([OrganisationService], (service: OrganisationService) => {
    expect(service).toBeTruthy();
  }));
});
