import { Ng2ejemploPage } from './app.po';

describe('ng2ejemplo App', () => {
  let page: Ng2ejemploPage;

  beforeEach(() => {
    page = new Ng2ejemploPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
