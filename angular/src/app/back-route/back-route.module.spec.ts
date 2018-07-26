import { BackRouteModule } from './back-route.module';

describe('BackRouteModule', () => {
  let backRouteModule: BackRouteModule;

  beforeEach(() => {
    backRouteModule = new BackRouteModule();
  });

  it('should create an instance', () => {
    expect(backRouteModule).toBeTruthy();
  });
});
