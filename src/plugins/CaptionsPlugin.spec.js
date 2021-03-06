import { CaptionsPlugin } from './CaptionsPlugin';
import { Bellhop } from 'bellhop-iframe';

describe('CaptionsPlugin', () => {
  const id = 'button_test';
  let cp;

  beforeEach(() => {
    const button = document.createElement('button');
    button.id = id;
    document.body.appendChild(button);
    cp = new CaptionsPlugin(`#${id}`);
    cp.preload({ client: new Bellhop() });
  });
  it('construct', () => {
    expect(cp.captionsButton).to.be.instanceof(HTMLButtonElement);
  });
  it('On click', () => {
    cp.captionsButton.click();
    expect(cp.captionsMuted).to.not.equal(test);
  });
  it('.setCaptionsStyles()', () => {
    cp.setCaptionsStyles({ font: 'comic-sans' });
    expect(cp.captionsStyles.font).to.equal('comic-sans');
  });
  it('.clearCaptionStyles()', () => {
    cp.clearCaptionsStyles();
    expect(cp.captionsStyles.font).to.equal('arial');
  });
  it('.getCaptionsStyles()', () => {
    expect(cp.getCaptionsStyles('font')).to.equal('arial');
    expect(cp.getCaptionsStyles()).to.be.instanceof(Object);
  });
});
