import {test as base} from '@playwright/test';
import {HomePage} from '../pages/Homepage';

type MyFixtures={
homePage:HomePage;
};

export const test=base.extend<MyFixtures>({
     homePage:async ({page},use) => {
      const home=new HomePage(page);
      await use(home);         
     }
});

export {expect} from '@playwright/test';