#1: 

Title: One World 

#2:

Description:

I am creating a React app that allows the user to retrieve relevant information about a certain country of their choosing. The main homepage will have the Seven Continents. After clicked it will send the user to 2nd page which displays the sub-region and allow the user to eventually traverse to endpoint which displays several different datapoints of a country (Name, Latitude & Longitude, etc).

#3:

Desktop:

https://wireframe.cc/pro/pp/5fdd0f549347085


Tablet:

https://wireframe.cc/pro/pp/23854e3c4347256



Mobile:

https://wireframe.cc/pro/pp/da2767ce7347254



#4:

Component Heirarchy: 

```src-
      -App
        -Header
        -Body
          -button
          -continent
              -Africa
                -Eastern Africa
                  -countries
                    -country name
                    -country data
                    -button
                -Middle Africa
                  -countries 
                -Northern Africa
                  -countries
                -Southern Africa
                  -countries
                -Western Africa
                  -countries
              -Americas
              -Europe
              -Asia
              -Oceania
              -Polar
        -Footer        
```

#### Component Breakdown



|  Component   |    Type    | State | Props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   |   contain link to homepage                   |
|     Body     |   class    |   y   |   n   |   provide links to the child components                          |
|   Continent  | functional |   n   |   y   |   will render all the continents for user to click               |
|   Subregion  | functional |   n   |   y   |   will the subregion of in the clicked continent                 |
|   Countries  | functional |   n   |   y   |   will render all the countries in the clicked subregion         |
|   Country    | functional |   n   |   y   |   render information of the clicked continent                    |
|    Footer    | functional |   n   |   n   |   will link to personal account                                  |


#5

http://countryapi.gear.host/v1/Country/getCountries

```{
    "IsSuccess": true,
    "UserMessage": null,
    "TechnicalMessage": null,
    "TotalCount": 1,
    "Response": [
        {
            "Name": "Costa Rica",
            "Alpha2Code": "CR",
            "Alpha3Code": "CRI",
            "NativeName": "Costa Rica",
            "Region": "Americas",
            "SubRegion": "Central America",
            "Latitude": "10",
            "Longitude": "-84",
            "Area": 51100,
            "NumericCode": 188,
            "NativeLanguage": "spa",
            "CurrencyCode": "CRC",
            "CurrencyName": "Costa Rican colón",
            "CurrencySymbol": "₡",
            "Flag": "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlags/cri.svg",
            "FlagPng": "https://api.backendless.com/2F26DFBF-433C-51CC-FF56-830CEA93BF00/473FB5A9-D20E-8D3E-FF01-E93D9D780A00/files/CountryFlagsPng/cri.png"
        }
    ]
}
```
6: MVP

```
-Grab data from an external API.
-Clickable interface that allows the user to access other pages. 
-Display country information (ex: Name, Latitude & Longitude, Flag etc)
-Link on all pages that allows user to click on a "Home" button and transfer them back to the "Home Page"
```

7: Post-MVP

```
-Install a back button that allows the user to go back to the previous page (component).
-Use 2nd API to transfer more data (Capital City) about a country. 
-Apply testing using Jest to App. 
```
8: SWOT Analysis

https://www.docdroid.net/JvMKKiY/swot-project-2-pdf

9:


|     Library      | Description                                        |
| :--------------: | :--------------------------------------------------|
|   React Router   | Connect and keep UI in sync with URL 
|    Storybook     | Develop components in isolation for use in project |
|     Axios        | Help us make requests to external resources        |

10:
| Component | Priority | Estimated Time | Time Invested | 
| --- | :---: |  :---: | :---: |  
| Psuedocode| M | 2hrs|  |  
| Create Parent component| H | 3hrs  | |
| Create Child components | H | 4.5hrs|  |  
| Data from API | H | 2hrs|  | 
| CSS - Basic | M | 3hrs| | 
| FlexBox| H | 4hrs|  |  
| CSS - Advanced | H | 3 hrs |  |   
| Work with Storybook  | H | 4.5hrs|  |  
| Proper utilization of React-Router| H | 3.5hrs|  | 
| --- | --- |  --- | --- |
| Total | H |29.5hrs|  |  
