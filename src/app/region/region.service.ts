import { Injectable } from '@angular/core';
import { Region } from '../models/region';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  region: Region[] = [];
  constructor() {}
}
