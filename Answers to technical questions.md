1.	How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

It took me two days of work in total with an average of 5 hours per day. Working with Angular v6 was new to me as I never used it before.
A more pertinent test (for integration), some custom styling without libraries (no bootstrap) and a proper message when no results have been found for the search term.
Related to the restaurants listing functionality, a preview or real time display of the search while typying a search term would be user friendly (without pressing Enter key or clicking).

2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

I went from Angular 1 to Angular 6 so Typescript was the newwest thing for me. Based on the docs, it looks like Angular 4 was using HttpModule as the http api but in angular 6 it is HttpClientModule that is used.
Snippet: return this.httpClient.get<Restaurant[]>(environment.URL, {headers, params});
The HttpClient was not used in Angular 4. Here it reduces the amount of code as you don't need to do a mappping and use directly a json parser method to get the Observable.

3.	How would you track down a performance issue in production? Have you ever had to do this?

Looking for places on the app were there are slowdown. If a functionality has frequent slowdown that means it has a performance issue.
I never did that in my previous job as I never was required to test an app in production. Usually it was the product owner and the company engineering team who relay any problems in production to my development team.

4.	How would you improve the Just Eat APIs that you just used?
Depends on the uses cases but I have never use the JustEat API directly as I do not have the Authorization parameter to test the api.
I think there is nothing to improve as the api performs exactly what it should do and all parameters are optional if need be.

5.	Please describe yourself using JSON.

ElieLouesse: [
    {
        age: '28',
        height: '178cm',
        weight: '70kg',
        sex: 'Male',
        occupation: 'Software developer',
        hobbies: ['working out', 'coding', 'gaming', 'reading']
    }
]
