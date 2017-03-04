import { WeekPlannerPage } from './app.po';

describe('week-planner App', () => {
  let page: WeekPlannerPage;

  beforeEach(() => {
    page = new WeekPlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('wpl works!');
  });
});
