import { ToLocaleDatePipe } from './to-locale-date.pipe';

describe('ToLocaleDatePipe', () => {
  it('create an instance', () => {
    const pipe = new ToLocaleDatePipe();
    expect(pipe).toBeTruthy();
  });
});
