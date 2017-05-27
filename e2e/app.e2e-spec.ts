import { MyjobPage } from './app.po';

describe('myjob App', () => {
  let page: MyjobPage;

  beforeEach(() => {
    page = new MyjobPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
