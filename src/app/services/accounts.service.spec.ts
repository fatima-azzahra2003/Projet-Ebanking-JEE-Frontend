import { TestBed } from '@angular/core/testing';

// @ts-ignore
import { AccountsServiceService } from './accounts.service';

describe('AccountsServiceService', () => {
  let service: AccountsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
