import { PlatformPage } from './app.po';

describe('platform App', function() {
  let page: PlatformPage;

  beforeEach(() => {
    page = new PlatformPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
