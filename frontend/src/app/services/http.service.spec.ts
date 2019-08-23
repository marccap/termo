import { TestBed } from '@angular/core/testing';

import { HttpServiceComponent } from './http.service';
import { HttpClientModule } from '@angular/common/http';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
  }));

  it('should be created', () => {
    const service: HttpServiceComponent = TestBed.get(HttpServiceComponent);
    expect(service).toBeTruthy();
  });
});
