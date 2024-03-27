import { Component } from '@angular/core';

import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {}