# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?

- Some backpack components.
- qs: To stringify the search params. I could have done it by hand in this simple case, but this is what I would use in real life.
- react-virtualized: To improve the performance when rendering a big list search results.

### Q) What is the command to start the server?

`APIKEY=<key> npm run server`

---

# General:

### Q) How long, in hours, did you spend on the test?

About 30 hours.

### Q) If you had more time, what further improvements or new features would you add?

I have already implemented a couple of features:
- virtual list for the results, which I think fits better in this case than pagination. But in real life it would be worth to test that assumption.
- Client side polling, to try to reduce the time it takes to show meaningful data.


There are a few other minor improvements (in term of complexity) that could be made:
- I haven't verified it, but I think the `cachedData` in the api can't handle multiple sessions well. Moving it to `state` should fix the issue.
- I used fixed height for the search results. It would be better to compute the real heights.
- make the API url configurable per environment
- make the Price component use the currency from the response
- make the Time component more robust by taking into account day differences between origin and destination; and avoid errors with timezones when extracting the date.
- I wrote tests for the parts that hold some logic, but it wouldn't hurt adding a few tests for the rest.
- Import just the parts needed from react-virtualized to reduce bundle size.

### Q) Which parts are you most proud of? And why?

I think I did a good job using your component suit and styles (altough most of the merit is yours there ;)). I have to say I am very impressed by the level of quality of the modules and their documentation, and it makes me really excited to work in such environment. :)

Also, I think I put together a production quality solution, with the client side polling and the virtual list, while keeping complexity low.

### Q) Which parts did you spend the most time with? What did you find most difficult?
I spent some time initially going through your API and styleguide, but that was expected.

I spent some time getting react-virtualized right, since I hadn't used it before. And configuring jest with babel, since it's not the standard setup because there is no .babelrc file, so I had to investigate that a bit.

And finally, long loading times itched me enough as to do the polling client-side to improve perceived performance.

### Q) How did you find the test overall? If you have any suggestions on how we can improve the test or our API, we'd love to hear them.
It was easy, maybe too much? There is not much complexity on the client side. But I found it very pleasant given the quality of the setup for the test, and solving the more complex features was fun!

I was unsure what I was being asked to do on the API side from the instructions, until I read the code and saw the TODOs. I'm also not sure if it was fine to implement the improvements I did or that was out of the test scope. Maybe more explicit instructions would help here.

I was also confused by the logo provided not matching the one in the design.

Regarding the API, I would return objects instead of arrays for the top level collections that have IDs and where order is not relevant (everything but Itineraries).

This error about the Session Key is incorrect (returned key doesn't follow that pattern) and caused me some confusion: 'Guid should contain 32 digits with 4 dashes (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).'

Curl commands from the API docs can't be pasted as-is because of linebreaks, it would be nice to get them in the correct format.
