import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  contact = environment.contact;
} 