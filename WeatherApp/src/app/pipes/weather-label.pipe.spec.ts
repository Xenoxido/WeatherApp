import { WeatherLabelPipe } from './weather-label.pipe';

describe('WeatherLabelPipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherLabelPipe();
    expect(pipe).toBeTruthy();
  });
});
