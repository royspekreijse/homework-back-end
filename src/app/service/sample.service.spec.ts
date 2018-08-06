import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SampleService } from './sample.service';

describe('SampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleService],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([SampleService], (service: SampleService) => {
    expect(service).toBeTruthy();
  }));
});
