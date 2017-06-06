import { ResumePage } from './app.po';

describe('resume App', () => {
  let page: ResumePage;

  beforeEach(() => {
    page = new ResumePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
