# Products In Pink - Case study

## Introduction

Case study on webshop page with results on selling articles, filters and carousel with mostly sold articles. This case study is done as a task provided by company as part of an interview task to evaluate skills of Frontend Developer.

Company provided with settings for task and goals that should be ideally met during completing the solution.

## Provided Company settings

### Visual Part: **Wireframe**

![Provided Task Wireframe](readme-assets/CaseStudyWireframeBase.png 'Provided Task Wireframe')

### Text Part: **Task and Goals Settings**

#### Task

- Provide finished programmed webpage according to provided Wireframe
- **Responsive design** - it will be used by users on desktop computers and mobile phones - design css management for solution
- REST service loading and content generation from JSON response service (describtion of REST service is at the and of this document)
- Create functional **Carousel** - It is ok if it will be moving left and right with infinite looping
- Create **Dynamic dropdown button** with text **_Koupit_**:
  - On click it will show: **_Koupit zrychleně, Porovnat, Hlídat, Přidat do seznamu_** items

#### Technical Rules of task

- As a technology solution React library should be used, if you think this would be done in different technology better, it can be added as bonus solution with pros and cons but React solution should be still provided
- We are curious about used technologies and solutions with arguments why they were used (after finishing the task we will go through the code and will discuss with author solution itself - **discussion is more important than implementation itself**)

#### Rules of solution providing

- Code should be provided in git repository (does not matter if in github, gitlab or bitbucket)
- Goal is that code is functional and prepared for presentation (`npm install && npm start` or similar solution )

#### Additional information for task

- Loading data from REST service, category Notebooks:
  [https://www.alza.cz/Services/RestService.svc/v2/products ](https://www.alza.cz/Services/RestService.svc/v2/products)

Service call by POST with JSON body:

```
{ 
  "filterParameters": { 
    "id": 18855843, 
    "isInStockOnly": false, 
    "newsOnly": false, 
    "wearType": 0, 
    "orderBy": 0, 
    "page": 1, 
    "params": [{ 
      "tId": 0, 
      "v": [] 
    }], 
    "producers": [], 
    "sendPrices": true, 
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
  "msg": null, 
  "vzt": 0, 
  "user_name": "", 
  "basket_cnt": 0, 
  "basket_total_cnt": 0, 
  "user_id": -1, 
  "favCnt": 0, 
  "alzaCredit": null, 
  "countryID": 0, 
  "countryPhonePrefix": "420", 
  "serverTime": 1489684095, 
  "data_cnt": 25, 
  "data": [ 
    { 
      "id": 4051892, 
      "code": "ESO2557n4", 
      "img": "https://i.alza.cz/Foto/f8/ES/ESO2557n4.jpg", 
      "name": "Philips Hue White 8.5W E27 starter kit", 
      "spec": "LED žárovka 2x LED 8.5W, A60, patice E27, 25000 hodin, 2700K, stmívatelná, ovládání pomocí chytrých zařízení, + Hue Bridge", 
      "price": "2&nbsp;199 Kč", 
      "cprice": null, 
      "priceWithoutVat": "1&nbsp;817 Kč", 
      "avail": "Skladem &gt; 5&nbsp;ks", 
      "avail_postfix": "a na &lt;span class=\"link\"&gt;11 prodejnách&lt;/span&gt;", 
      "availLegend": null, 
      "avail_postfix2": null, 
      "avail_color": "398000", 
      "is_action": false, 
      "action_name": null, 
      "rating": 4.644, 
      "promo_cnt": 0, 
      "promos": null, 
      "order": 1, 
      "is_special_service": false, 
      "type": 0, 
      "itemType": "Commodity", 
      "url": "https://www.alza.cz/philips-hue-9-5w-a60-e27-set-d4051892.htm?catid=18855843", 
      "minimumAmount": 1, 
      "amountInPack": 0, 
      "start_time": null, 
      "end_time": null, 
      "variant_type": 0, 
      "advertising": "Tento týden zakoupilo 16 zákazníků", 
      "categoryName": null, 
      "inBasket": 0 
   ] 
  } 
```

Most can be ignored, use only `data` structure with articles. In case of an error, parameter `err` will be `> 0` and `msg` parameter will provide error message

## Task Analysis and Pre-Programming Preparation

### Wireframe Analysis

Before I even touch my keyboard and start coding something, I made myself a habit of sitting for sometime and think about information I was provided for a task. I have few fancy names for that as you normally see in articles like _"Give it an hour"_ but in fact those are just words.

In reality I am sitting with, in this particular example, wireframe provided with the task, task settings and notepad. Making notes about what I see, In my mind thinking about how deep I want to go with atomization of whole wireframe and its parts and with what of already made parts in the system I can solve this, if this is already part of bigger system.

#### **Pre-Analysis Task Documentation**

I ask myself questions like:

**Question A)** Is here anything missing for me to make it done smoothly?
**Question B)** Is what I see enough to create all parts for the layout?

In this case.. No and no. Why?

**Answer A)** We can start with first two nodes of the task. Provide solution according to wireframe, make it responsive with css style management for desktop and mobile. Ok. We are missing some crucial information right from the start:

- For what resolution is this wireframe made? It is not written anywhere, it can be zoomed or it can be shrinked.

_My assumption here is that this is made for desktop on 1920px because that is mostly used for this wireframes and it is not using whole width of the screen but it is shrinked with maximum width of 1140px on 1920px._

_How I am making these numbers?_

_This layout is very similar of what Bootstrap is using for years and many designers use 12 column standard setting because it is easier to put it in those brackets._

- Second maybe even more crucial part missing is hidden in second node of the task with making it responsive for mobile. There is no wireframe for responsive solution.

_Where is the wireframe for mobile please?_

_There is no visual representation how it should look on mobile nor on middle point when resolution is shrinking and inner parts of layout will start moving. One example to prove the point. There is 5 articles on page, I can safely say that if somebody will open it on notebook with like 13" screen article images will be barely visible and I am not even speaking about texts at this point._

**Answer B)** We can use another point from task setting speaking about "Dynamic Dropdown Button".

_Here it might look that I am hunting for too much detail_

But there is no visualization how that button should look to be seen anywhere on the wireframe. You can see it as small chevron as part of **"Koupit"** button but nowhere it is visualized in opened state (marked in wireframe deconstruction as issue D).

_In this case I am considering wireframe as not finished and I will make it as I feel like it._

> I would consider this task as provided with not enough information for finishing it and ideally consult changes and finishing touches with designer responsible for making predispositions for this task.

#### **Wireframe Deconstruction**

![Cut In Parts Wireframe](readme-assets/CaseStudyWireframeCuts.png 'Cut In Parts Wireframe')

From start this wireframe is not hard to deconstruct itself but there is lot of information missing.
Taking appart that Company providing this task have already live webpage, I can take some inspiration from their current solution and I can cut lot of work with reusing font sizes, colors, dimensions and object like buttons and star chart setting from their current webpage.
If we encapsulate this wireframe as "no additional information obtainable" example, there are these particular settings missing.

_At this point I have no idea about font sizes, picture dimensions. I am not counting animations and even colors because image is presented as wireframe._

_I see here a bit of misunderstanding what provided document is and how it is presented._

_Wireframe definition: [Wireframe, Usability.gov, 5th October 2022](https://www.usability.gov/how-to-and-tools/methods/wireframing.html)_

_In this definition provided document is not wireframe because it have partly finished styles._

Pixels are here used only for description purposes. And do not represent final solution of styles.

- **Header:** _My assumtion here is that it is either H1 or H2 heading size. Depending on how SEO is done on webpage. With provided materials I would consider it H1 because it is page defining heading for whole layout page._

- **Sub-Category Button Structure:**

  - _My assumtion here is that those are not buttons at all but links. There is no legend or description for their functionality so from what I see I can tell that if you click one it will reload whole page, change filter result and url. Therefore it is link not button it is just disguised as one._
  - _Also there is no information from where those categories and name can be taken from and if they are dynamic or static. Again my assumption by already active webpage of Company is that those are changing by main category which is represented by H1 heading above_

- **Carousel Block:**

  - _Here again heading is not defined but from what I assume it will be H3 just by hierarchy of heading on page._
  - _Carousel itself is straight forward. Left, Right movement, ideally infinite. Ok. But..._
    - How many articles should move on arrow click? 1? whole set of what is visible? This is for example for implementation good information to have because it will change how it will behave for user and how it will be programmed.
    - Also here we have problem with responsiveness of whole solution because if you make it smaller and want it for mobile 5 at once are hardly maintainable. _I presume that on mobile it will be only one, maybe two, on desktop up to three, 4 on notebook resolution and 5 only for like 1366px resolution and higher and only if I make base layout on 1320px scalable form and not static 1140px as bootstrap normally have it because it will look not pleasant to watch for user._
  - Articles itself will have separate list item because there are similarities with search result articles

- **Wannabe Tabs:**

  Part marked as T in deconstructed wireframe.

  - I presume those are different filter / sort settings for search results on article layout part

  _these look very similar to standard tab buttons used for tabs on webpages, but with what represents they are in my opinion not tabs at all. Those are just filter buttons disguised as tabs. So in here from UI point of view I would consider them as misinterpretation of functionality. They are not switching tabs with different products at all they are just changing visual representation of search result._

- **Articles for sell:**

  - _Is it inconsistency in design that those in carousel have different order of same information as those in search result or is it on purpose?_

  issue E

  - Right from the start I see inconsistency in how different articles should look. Taking first three, we have `Article name`, `Article description` and `"Free goodies you receive if you buy this article"`. The problem from UI visual stand point that texts are with different heights with and without _free goodies list_ under it. How they should work together? Should be text of description cropped to accommodate all _free goodies_ list items or should I cut those list items in order to show full description as it is in article 3?
  - What is the maximum number of _free goodies_ list?
  - Since from "wireframe" it looks like there is priority on images to be on same height to look nice, how it will be measured (by longest text with full set of list items?) and is the white space desired result?
  - It looks like text and list item have static height. What is the measure for it?
  - How this will look on mobile? *From UI perspective people will rather look on pictures and buy by pictures than reading texts, so if this will look the same on mobile it can happen that text and *free goodies* list will take most of users viewport and user will see only part or even none of articles image. Is that desired solution?*

  issue S

  - Is in starchart considered that it can go over article image or be bartely visible on some particular articles because of the color.
  - Is starchart active on result and can user give star review from this view?

    _If yes how it will behave with active image behind it for example?_

  - Article image is active link to article detail? \*If not, how can user get to article detail from this view?

  - Price tag and button are lacking space around, how will blocking and floating of objects work on smaller resolutions?

  - Buy button: Is buy active or only text?
  - If the article is not in storage or we are waiting for it to come, how it will be visually represented?

  issue D

  - Will dropdown oveflow image? Will it be opened up or down? Will it make button and article bigger or will it flow over other articles?

## Programming solution

As per task setting this case study is made mainly in React with Typescript. There was no restriction for using typescript or not.

For styling no preprocessor is used. With current state of CSS I personally consider preprocessors deprecated.

### Additional packages used

- [classnames](https://www.npmjs.com/package/classnames) - support for easy css class switching
- [json-server]
- [axios](https://www.npmjs.com/package/react-axios) - REST API connection solution

Consideration was for adding `react-router-dom` package for better management of error pages, but that is not in task description even mentioned so for example error management will be done different way. This case study is considered only one-page solution

### Available Scripts

Project is installed with typescript template at its base, for local instalation use `npm install`.

In the project directory, you can run:

#### start json-server

`npx json-server --watch ./src/assets/serverResponseNotebooks.json` which will make server on `localhost:3000/data`

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3010](http://localhost:3010) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
port was changed by script `"start": "set PORT=3010 && react-scripts start"`

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Description of used techniques

#### Component set deconstruction

- Carousel Wrapper
- Carousel Article (Extend from article as separate component with different order of info)
- Sub-Category Button with future posibility to not be static and dynamically generated from provided list
- Filter Buttons changing layout in current state without reloading the page
- Article
  - Article Image
  - Article Name - inline not a component
  - Article _free-goodies_ item list
  - Article Description - Inline not a component
- Price - reusable component
- Button Group
- Button - reusable component
- Dropdown menu - optional text inside or only arrow - reusable component
- Star-Chart - reusable component

#### Utilities

- State management for data and loading (useReducer, useContext)

#### Why I cannot do the API fetch?

_There is no possibility to do this API call from browser under localhost enviroment because of CORS. For the work to proceed correctly I would need to disable my browser CORS and security. This is if we are speakin about client side scripting._

- Category response came with different category than it was in wireframes and task settings
- API response come in different format than example response in task
