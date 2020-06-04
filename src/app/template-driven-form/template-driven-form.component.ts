import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }
  public model = {
    firstName: ''
  };

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model.firstName);
  }

}
