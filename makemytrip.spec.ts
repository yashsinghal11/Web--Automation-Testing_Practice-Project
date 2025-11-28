import {test,expect} from '../fixtures/fixtures';
import { HomePage } from '../pages/Homepage';
test.describe("MakeMyTrip page testing",()=>{
 test('get cheap flight',async({homePage})=>{
    const sourceAirportCity="Chennai";
    const destinationAirportCity="Bengaluru";
     await homePage.selectSourceDestination(sourceAirportCity,destinationAirportCity);
     await homePage.selectDepartureDateAndSearch("Tue Sep 09 2025");
 })

});
export {expect} from '@playwright/test';