import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FabButtonsComponent } from './shared/fab-buttons.component';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FabButtonsComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'turfman';
}
