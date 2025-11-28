import { Page,Locator } from "@playwright/test";

export class HomePage{
     readonly fromCityField: Locator;
     readonly sourceCityInputField:Locator;
     readonly sourceCityFirstOption:Locator;
     readonly toCityFeild:Locator;
     readonly desitnationCityInputField:Locator;
     readonly destinationCityFirstOption:Locator;
     readonly searchButton:Locator;
     constructor(private page:Page ){
          this.fromCityField=page.locator("//input[@id='fromCity']");
          this.sourceCityInputField=page.locator("input.react-autosuggest__input");
          this.sourceCityFirstOption=page.locator("//div[@class='makeFlex appendTop12  forHideundefined']");
          this.toCityFeild=page.locator("//input[@id='toCity']");
          this.desitnationCityInputField=page.locator("//input[contains(@class,'react-autosuggest__input')]");
          this.destinationCityFirstOption=page.locator("//div[@class='makeFlex appendTop12  forHideundefined']");
          this.searchButton=page.locator("//a[@class='primaryBtn font24 latoBold widgetSearchBtn ']");
     }
     async selectSourceDestination(sourceAirport:string,destinationAirport:string){
          await this.page.goto("https://www.makemytrip.com/");
          await this.fromCityField.click();
          await this.sourceCityInputField.fill(sourceAirport);    
          await this.sourceCityFirstOption.click();
          await this.toCityFeild.click();
          await this.desitnationCityInputField.waitFor({ state: 'visible' });
          await this.desitnationCityInputField.fill(destinationAirport);
          await this.destinationCityFirstOption.first().click();
     }

     async selectDepartureDateAndSearch(departureDate:string){

    await this.page.locator(`.DayPicker-Day[aria-label="${departureDate}"]`).click();
    await this.searchButton.click();
     }
}
