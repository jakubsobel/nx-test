import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  afterRender,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '@nx-test/menu';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';

@Component({
  standalone: true,
  imports: [MenuComponent, RouterModule],
  selector: 'nx-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  title = 'nx-test';
  appId = 'KB6T9S5tEHLaj5068sv4LSOQ';
  user?: PassageUser;

  constructor() {
    afterRender(() => {
      console.log('afterRender: app');
      import('@passageidentity/passage-elements/passage-profile');
    });
  }

  public async ngOnInit() {
    try {
      this.user = new PassageUser();
      const userInfo = await this.user.userInfo();
      const test = await this.user.authGuard();
      const test2 = await this.user.getAuthToken();

      console.log(userInfo);
      console.log(test);
      console.log(test2);
    } catch (err) {
      console.log('Logged out');
    }
  }

  public logout() {
    this.user?.signOut();
  }
}
