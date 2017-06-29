import { browser, by, element } from 'protractor';

export class MyAngularAppPage {
  navigateTo() {
    return browser.get('/');
  }
}
