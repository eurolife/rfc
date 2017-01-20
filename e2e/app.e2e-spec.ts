import { RFCAppPage } from './app.po';

describe('rfc-app App', function() {
  let page: RFCAppPage;

  beforeEach(() => {
    page = new RFCAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
