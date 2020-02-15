import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-help',
  templateUrl: './error-help.component.html',
  styleUrls: ['./error-help.component.scss']
})
export class ErrorHelpComponent implements OnInit {
  @Input() message: string;

  constructor() {}

  ngOnInit(): void {}
}
