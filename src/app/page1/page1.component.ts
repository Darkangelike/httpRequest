import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  public FrenchRegions!: string;
  FrenchDepartments!: string;
  FrenchCommunes!: string;
  radioValue = {};

  constructor(private http: HttpClient) {
    this.http
      .get(`geo.api.gouv.fr/regions`)
      .toPromise()
      .then(function (res) {
        console.log(res);
      });
  }

  submittedForm() {
    console.log('Form submitted');
  }

  ngOnInit(): void {}
}
