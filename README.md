# Products In Pink - Case study

## Introduction

Case study on webshop page with results on selling articles, filters and carousel with mostly sold articles. This case study is done as a task provided by the company as part of an interview task to evaluate the skills of a Frontend Developer.

The company provided settings for the task and goals that should be ideally met during completing the solution.

## Provided Company settings

### Visual Part: **Wireframe**

![Provided Task Wireframe](readme-assets/CaseStudyWireframeBase.png 'Provided Task Wireframe')

### Text Part: **Task and Goals Settings**

#### Task

- Provide a finished programmed webpage according to provided wireframe
- **Responsive design** - it will be used by users on desktop computers and mobile phones - design CSS management for solution
- REST service loading and content generation from JSON response service (description of REST service is at the end of this document)
- Create functional **Carousel** - It is ok if it will be moving left and right with infinite looping
- Create **Dynamic dropdown button** with text **_Koupit_**:
  - On click it will show: **_Koupit zrychleně, Porovnat, Hlídat, Přidat do seznamu_** items

#### Technical Rules of task

- As a technology solution React library should be used, if you think this would be done in different technology better, it can be added as a bonus solution with pros and cons but React solution should be still provided
- We are curious about used technologies and solutions with arguments why they were used (after finishing the task we will go through the code and will discuss with the author of the solution itself - **discussion is more important than implementation itself**)

#### Rules of solution providing

- Code should be provided in git repository (does not matter if in GitHub, GitLab or bitbucket)
- Goal is that code is functional and prepared for presentation (`npm install && npm start` or a similar solution )

#### Additional information for task

- Loading data from REST service, category Notebooks:
  [https://www.alza.cz/Services/RestService.svc/v2/products ](https://www.alza.cz/Services/RestService.svc/v2/products)

Service call by POST with JSON body:

```
{
  "filterParameters": {
    "id": 18855843,
    "isInStockOnly": false,
    "newsOnly": false,
    "wearType": 0,
    "orderBy": 0,
    "page": 1,
    "params": [{
      "tId": 0,
      "v": []
    }],
    "producers": [],
    "sendPrices": true,
    "type": "action",
    "typeId": "",
    "branchId": ""
  }
}
```

- Response JSON will provide this information:

```
{
  "err": 0,
  "msg": null,
  "vzt": 0,
  "user_name": "",
  "basket_cnt": 0,
  "basket_total_cnt": 0,
  "user_id": -1,
  "favCnt": 0,
  "alzaCredit": null,
  "countryID": 0,
  "countryPhonePrefix": "420",
  "serverTime": 1489684095,
  "data_cnt": 25,
  "data": [
    {
      "id": 4051892,
      "code": "ESO2557n4",
      "img": "https://i.alza.cz/Foto/f8/ES/ESO2557n4.jpg",
      "name": "Philips Hue White 8.5W E27 starter kit",
      "spec": "LED žárovka 2x LED 8.5W, A60, patice E27, 25000 hodin, 2700K, stmívatelná, ovládání pomocí chytrých zařízení, + Hue Bridge",
      "price": "2&nbsp;199 Kč",
      "cprice": null,
      "priceWithoutVat": "1&nbsp;817 Kč",
      "avail": "Skladem &gt; 5&nbsp;ks",
      "avail_postfix": "a na &lt;span class=\"link\"&gt;11 prodejnách&lt;/span&gt;",
      "availLegend": null,
      "avail_postfix2": null,
      "avail_color": "398000",
      "is_action": false,
      "action_name": null,
      "rating": 4.644,
      "promo_cnt": 0,
      "promos": null,
      "order": 1,
      "is_special_service": false,
      "type": 0,
      "itemType": "Commodity",
      "url": "https://www.alza.cz/philips-hue-9-5w-a60-e27-set-d4051892.htm?catid=18855843",
      "minimumAmount": 1,
      "amountInPack": 0,
      "start_time": null,
      "end_time": null,
      "variant_type": 0,
      "advertising": "Tento týden zakoupilo 16 zákazníků",
      "categoryName": null,
      "inBasket": 0
   ]
  }
```

Most can be ignored, use only a `data` structure with articles. In case of an error, the parameter `err` will be `> 0` and the `msg` parameter will provide an error message

## Task Analysis and Pre-Programming Preparation

### Wireframe Analysis

Before I even touch my keyboard and start coding something, I made myself a habit of sitting for some time and thinking about the information I was provided for a task. I have a few fancy names for that as you normally see in articles like _"Give it an hour"_ but those are just words.

In reality, I am sitting with, in this particular example, a wireframe provided with the task, task settings and notepad. Making notes about what I see, in my mind think about how deep I want to go with the atomization of the whole wireframe and its parts and with what already made parts in the system I can solve this if this is already part of a bigger system.

#### **Pre-Analysis Task Documentation**

I ask myself questions like:

**Question A)** Is there anything missing for me to make it done smoothly?
**Question B)** Is what I see enough to create all parts for the layout?

In this case... No and no. Why?

**Answer A)** We can start with the first two nodes of the task. Provide solution according to wireframe, make it responsive with CSS style management for desktop and mobile. Ok. We are missing some crucial information right from the start:

- For what resolution is this wireframe made? It is not written anywhere, it can be zoomed in or it can be shrunk.

_My assumption here is that this is made for a desktop on 1920px because that is mostly used for these wireframes and it is not using the whole width of the screen but it is shrunk with a maximum width of 1140px on 1920px._

_How I am making these numbers?_

_This layout is very similar to what Bootstrap is using for years and many designers use a 12-column standard setting because it is easier to put it in those brackets._

- Second, maybe an even more crucial part missing is hidden in the second node of the task with making it responsive for mobile. There is no wireframe for a responsive solution.

_Where is the wireframe for mobile, please?_

_There is no visual representation of how it should look on mobile nor on the middle point when resolution is shrinking and inner parts of the layout will start moving. One example to prove the point. There are 5 articles on the page, I can safely say that if somebody will open it on a notebook with like 13" screen. Article images will be barely visible and I am not even speaking about texts at this point._

**Answer B)** We can use another point from the task setting speaking about the "Dynamic Dropdown Button".

_Here it might look that I am hunting for too much detail_

But there is no visualization of how that button should look to be seen anywhere on the wireframe. You can see it as a small chevron as part of the **"Koupit"** button but nowhere it is visualized in an opened state (marked in wireframe deconstruction as issue D).

_In this case I am considering the wireframe as not finished and I will make it as I feel like it._

> I would consider this task as provided with not enough information for finishing it and ideally consult changes and finishing touches with the designer responsible for making predispositions for this task.

#### **Wireframe Deconstruction**

![Cut In Parts Wireframe](readme-assets/CaseStudyWireframeCuts.png 'Cut In Parts Wireframe')

From start, this wireframe is not hard to deconstruct but there is a lot of information missing.
Taking apart that Company providing this task have already live webpage, I can take some inspiration from their current solution and I can cut a lot of work by reusing font sizes, colours, dimensions and objects like buttons and star chart setting from their current webpage.
If we encapsulate this wireframe as a "no additional information obtainable" example, settings for those particular components are missing.

_At this point, I have no idea about font sizes or picture dimensions. I am not counting animations and even colours because an image is presented as a wireframe._

_I see here a bit of misunderstanding about what the provided document is and how it is presented._

_Wireframe definition: [Wireframe, Usability.gov, 5th October 2022](https://www.usability.gov/how-to-and-tools/methods/wireframing.html)_

_In this definition provided document is not a wireframe because it has partly finished styles._

Pixels are here used only for description purposes. And do not represent the final solution of styles.

- **Header:** _My assumption here is that it is either H1 or H2 heading size. Depending on how SEO is done on the webpage. With provided materials, I would consider it H1 because it is page defining heading for the whole layout page._

- **Sub-Category Button Structure:**

  - _My assumption here is that those are not buttons at all but links. There is no legend or description for their functionality so from what I see I can tell that if you click on it, it will reload the whole page and change the filter result with the webpage URL. Therefore it is a link, not a button. It is just disguised as one._
  - _Also there is no information on where those categories and names can be taken from and if they are dynamic or static. Again my assumption from the already active webpage of the Company is that those are changing by the main category which is represented by the H1 heading above_

- **Carousel Block:**

  - _Here again heading is not defined but from what I assume it will be H3 just by the hierarchy of heading on the page._
  - _Carousel itself is straightforward. Left, Right movement, ideally infinite. Ok. But..._
    - How many products should move on arrow click? 1? whole set of what is visible? This is for example for implementation good information to have because it will change how it will behave for the user and how it will be programmed.
    - Also here we have a problem with the responsiveness of the whole solution because if you make it smaller and want it for mobile, 5 at once are hardly maintainable. _I presume that on mobile it will be only one, maybe two, on desktop up to three, 4 on notebook resolution and 5 only for like 1366px resolution and higher and only if I make the base layout on 1320px scalable form and not static 1140px as bootstrap normally have it because it will look not pleasant to watch for the user._
  - Products themselves will have separate list items because there are similarities with search result products

- **Wannabe Tabs:**

  The part marked as T in deconstructed wireframe.

  - I presume those are different filter/sort settings for search results on the product layout part

  _these look very similar to standard tab buttons used for tabs on webpages, but with what represent they are in my opinion, not tabs at all. Those are just filter buttons disguised as tabs. So here from a UI point of view I would consider them as a misinterpretation of functionality. They are not switching tabs with different products at all they are just changing the visual representation of search results._

- **Products for sale:**

  - _Is it inconsistency in design that those in the carousel have different order of the same information as those in the search result or is it on purpose?_

  issue E

  - Right from the start I see inconsistency in how different products should look. Taking the first three, we have `Product name`, `Product description` and `"Free goodies you receive if you buy this product"`. The problem from UI visual standpoint is that texts are at different heights with and without the _free goodies list_ under it. How they should work together? Should be the description cropped to accommodate all _free goodies_ list items or should I cut those list items in order to show the full description as it is in article 3?
  - What is the maximum number of _free goodies_ list?
  - Since from "wireframe" it looks like there is a priority on images to be on the same height to look nice, how it will be measured (by longest text with the full set of list items?) and is the white space desired result?
  - It looks like text and list items have static height. What is the measure for it?
  - How this will look on mobile? *From a UI perspective people will rather look at pictures and buy by pictures than read texts, so if this will look the same on mobile it can happen that text and *free goodies* list will take most of the user viewport and users will see only part or even none of the product image. Is that desired solution?*

  issue S

  - Is a star chart considered when it is over a product image on different background colours of images? On some, it can be barely visible.
  - Is the star chart active on the product and can the user give a starred review from this view?

    _If yes how it will behave with the product image behind it for example?_

  - Product image is an active link to product detail? \*If not, how can the user get to article detail from this view?

  - Price tag and button are lacking space around, how will blocking and floating of objects work on smaller resolutions?

  - Buy button: Is buy active or only text?
  - If the article is not in storage or we are waiting for it to come, how it will be visually represented?

  issue D

  - Will dropdown overflow image? Will it be opened up or down? Will it make the button and article bigger or will it flow over other articles?

## Programming solution

As per task setting, this case study is made mainly in React with Typescript. There was no restriction for using typescript or not.

For styling, no preprocessor is used. With the current state of CSS, I consider preprocessors deprecated.

### Additional packages used

- [classnames](https://www.npmjs.com/package/classnames) - support for easy css class switching
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [axios](https://www.npmjs.com/package/react-axios) - REST API connection solution

Consideration was for adding the `react-router-dom` package for better management of error pages and loading when products are loaded from the database, but that is not in this task description even mentioned so for example error management is done by a separate component which is commanded by a state change. The same is done for loading. This case study is considered only a one-page solution

### Available Scripts

The project is installed with a typescript template at its base, for local installation use `npm install`.

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
port was changed by script `"start": "react-scripts start"`

#### `npm test`

The JEST library was installed to handle tests on this application. Example tests are made for the `handlers.ts` file and a function in it.
For cooperation with typescript `types@jest` and `ts-jest` packages are added. Configuration was left in default settings.

#### `npm run coverage`

Using the JEST library to shop an overall coverage of tests in the repository.

#### `npm start` for server

In a server folder on this repository is stored another set of files and a `package.json` which is meant for installing and maintaining the nodeJS server. It can be started by the same command from this folder as is used for starting React application in the root of this repository.

### Description of used techniques

#### Component set deconstruction

- Carousel Wrapper
- Carousel Item (Extend from Product as a separate component with different order of info)
- Sub-Category Button with future possibility to not be static and dynamically generated from the provided list
- Filter Buttons changing the layout in the current state without reloading the page
- Product
  - Article Image
  - Article Name - inline not a component
  - Article _free-goodies_ item list
  - Article Description - Inline not a component
- Price - reusable component
- Button Group
- Button - reusable component
- Dropdown menu - optional text inside or only arrow - reusable component
- Star-Chart - reusable component
- Test Page - all simple components that are used in the whole system in one place

#### Why I cannot do the API fetch?

_There is no possibility to do this API call from the browser under the localhost environment because of CORS. For the work to proceed correctly I would need to disable my browser CORS and security. This is if we are speaking about client-side scripting._

Because of this first finding when I was trying to establish connection with the database I moved to try hotwire nodeJS server which will provide connection for my system and the database.

Here I tried different tutorials and techniques. I made custom hook for Axios to connect with my node server and get the response.

On the nodeJS server I first used Axios but for some reason it all the time responded with _404 Error code_ it took me two days of trying. In the end I installed `node-fetch` which in the end established connection and on one occasion I even saw response in `console.log` I made for it.

API connections themselves are for me yet uncharted territory.

To make most from this task I went slightly round way and used POSTMAN to get the result. I received different data concept from server than it is written in the settings of this task. Difference in the interface can be found in `/utils/interfaces.ts` where I stored interface made according the settings and under it another set made from response I received from POSTMAN call.
In application itself instead of calling server and the custom connection hook, set of fake variables is done and data are loaded from stored JSON in the repository.

## Task Conclusion

To finish this task up to best of my knowledge I first made an analysis of the task, prepared structure for components and different variations for responsive components in the page.

To additionally go a bit further, and if you do not like current colour scheme, button for changing colour mode is provided, same as a button to show different small parts from which I made whole page working.
