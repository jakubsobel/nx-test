import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '@nx-test/menu';

@Component({
  standalone: true,
  imports: [MenuComponent, RouterModule],
  selector: 'nx-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'nx-test';
}
