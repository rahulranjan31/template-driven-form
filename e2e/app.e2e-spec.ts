import { NewFormPage } from './app.po';

describe('new-form App', function() {
  let page: NewFormPage;

  beforeEach(() => {
    page = new NewFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
