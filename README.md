# gimi-web

As the specifications are complete and well specced out this can be done by a junior developer for a fixed cost. If this goes well it is encouraged to start a recurring contract. Senior developer from our side will assist you (same developer as writing these specs)

## Specifications
Alright Gimi-web will be a Single page Application that will host the content for the sites:

* veckopengen.se
* gimitheapp.com
* ukepengen.no

The content is stored in the folders /specs/veckopengen.se, /specs/ukepengen.no, /specs/gimitheapp.com/.
This is rough description of how i would have done it and the milestones this project has. The milestones will be tied to a monetary reward. The last milestone is arbitrary feedback. We will only do this one iteration of arbitrary feedback to not impose great risk for you. Code reviews and feedback for every commit is calculated into the individual milestones.

The end result should be a Single Page Application (SPA) written in react powering these three sites (the routing solution you write will support this). Some content in the SPA will be site specific (i.e veckopengen.se, ukepengen.no and gimitheapp.com specific). More information on this in the trello cards.

Trello cards is at this url: https://trello.com/b/YfuphV6N/gimi-web

When you git push to this repo the webserver will be built (see server/app.js) and the files in src directory will be served to:
https://gimi-web.herokuapp.com/

right now you can see the english specs at:
https://gimi-web.herokuapp.com/specs/gimitheapp.com/

Here are the MileStones:

* fork veckopengen.se folder and copy into src directory
* Support for different languages (i18n) on different sites. Make i18n support for every text on the whole site using your favourite react i18n component (end result should be a sv.json, en.json and no.json with text keys and values) in the src/i18n folder)
* make routing support for different content on different sites (i.e solve all the trello cards in https://trello.com/b/YfuphV6N/gimi-web)
* Make support for blog (see this card: https://trello.com/c/WkZrVbf5/4-localize-every-text-except-this-site-see-screenshot)
* test and quality assure (HOME) (se,no,en site)
* test and quality assure (Family Community) (se,no,en site)
* test and quality assure (Coaching) (se,no,en site)
* test and quality assure (News) (se,no,en site)
* test and quality assure (Faq) (se,no,en site)
* test and quality assure (Terms) (se,no,en site)
* test and quality assure (About us) (se,no,en site)
* final feedback one iteration

Budget: 1500 dollars

Final feedback is 200 dollars, the reset of the milestones is 1300/number of milestones each

## Guidelines ##
Use bootstrap as layout engine. I encourage you to use babel/es6 however create clear build/deploy scripts in package.json if you do. If yor prefer not to work with the generated html pages youre free to do so. The raw psd files ar located in psd. Also if you have a better flow than the one presented above plz feel free to run it by me. We do a milestone for each point here over. That means you get a reward for every completed point stated above.

## Getting started ##
How to get this party started
* git clone this repo
* npm install
* npm run-script build
* npm start
