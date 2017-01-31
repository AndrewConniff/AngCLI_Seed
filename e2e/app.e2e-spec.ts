import { IstreamPage } from './app.po';

describe('istream App', function() {
  let page: IstreamPage;

  beforeEach(() => {
    page = new IstreamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
