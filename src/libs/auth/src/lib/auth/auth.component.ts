import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import '@passageidentity/passage-elements/passage-auth'

@Component({
  selector: 'nx-test-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthComponent {
  appId = 'KB6T9S5tEHLaj5068sv4LSOQ';
}
