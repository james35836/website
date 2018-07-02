import { MainRouteModule } from './main-route.module';

describe('MainRouteModule', () => {
  let mainRouteModule: MainRouteModule;

  beforeEach(() => {
    mainRouteModule = new MainRouteModule();
  });

  it('should create an instance', () => {
    expect(mainRouteModule).toBeTruthy();
  });
});
