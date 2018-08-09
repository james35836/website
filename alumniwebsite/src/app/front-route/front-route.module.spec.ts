import { FrontRouteModule } from './front-route.module';

describe('FrontRouteModule', () => {
  let frontRouteModule: FrontRouteModule;

  beforeEach(() => {
    frontRouteModule = new FrontRouteModule();
  });

  it('should create an instance', () => {
    expect(frontRouteModule).toBeTruthy();
  });
});
