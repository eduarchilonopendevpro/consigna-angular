import { ToLocaleTimePipe } from './to-locale-time.pipe';

describe('ToLocaleTimePipe', () => {
  it('create an instance', () => {
    const pipe = new ToLocaleTimePipe();
    expect(pipe).toBeTruthy();
  });
});
