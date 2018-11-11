import { Ng2dssatPage } from './app.po';

describe('ng2dssat App', function() {
  let page: Ng2dssatPage;

  beforeEach(() => {
    page = new Ng2dssatPage();
  });

  it('should display dssat in h1 tag', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dssat');
  });
});
