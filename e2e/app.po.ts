import { browser, element, by } from 'protractor';

export class WeekPlannerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wpl-root h1')).getText();
  }
}
