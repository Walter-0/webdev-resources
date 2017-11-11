# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.19)
# Database: webdev_db
# Generation Time: 2017-11-10 17:42:57 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Resources
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Resources`;

CREATE TABLE `Resources` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `link` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `resources_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Resources` WRITE;
/*!40000 ALTER TABLE `Resources` DISABLE KEYS */;

INSERT INTO `Resources` (`id`, `title`, `description`, `link`, `createdAt`, `updatedAt`, `UserId`)
VALUES
	(1,'What is the difference between Normalize.css and Reset CSS?','I know what CSS Reset is, but recently I heard about this new thing called Normalize.css What is the difference between Normalize.css and Reset CSS? What is the difference between normalizing CSS...','https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css','2017-10-03 19:20:45','2017-10-03 19:20:45',1),
	(3,'Cheetyr – CSS Selectors Cheat Sheet','A handy collection of cheat sheets for designers and developers.','http://www.cheetyr.com/css-selectors','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(4,'Pesticide for Chrome','This extension inserts the Pesticide CSS into the current page, outlining each element to better see placement on the page.','https://chrome.google.com/webstore/detail/pesticide-for-chrome/bblbgcheenepgnnajgfpiicnbbdmmooh?hl=en-US','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(5,'Buy Adobe Muse CC | Download HTML5 web design software free trial','Create gorgeous HTML5 websites without writing code that dynamically scale to any device with Adobe Muse CC. Join today.','https://www.adobe.com/products/muse.html','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(6,'Adobe Experience Design CC (Beta) | Prototyping &amp; Wireframing Tool','Design and prototype websites and mobile apps with Adobe Experience Design CC (Beta), the first all-in-one solution for UX designers. Download now to get started.','https://www.adobe.com/products/experience-design.html','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(7,'Wireframe.cc: Wireframe.cc - minimal wireframing tool','A simple wireframing tool that doesn\'t get in your way. Create and share simple wireframes of websites and mobile apps.','https://wireframe.cc/fcf5qn','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(8,' CSS · Bootstrap ','Bootstrap, a sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.','https://getbootstrap.com/css/#grid','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(9,'Colorsublime','Color your Sublime Text editor trying your favorite theme online before downloading it for free','http://colorsublime.com/','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(10,'Launch Sublime Text 3 from the command line','Thoughts on Ruby, Rails, open source software, programming, and life from Olivier Lacan','http://olivierlacan.com/posts/launch-sublime-text-3-from-the-command-line/','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(11,'Bootstrap Grid','The best friend of every Bootstrap user. Get a grid overlay on your website with a single click.','https://chrome.google.com/webstore/detail/bootstrap-grid/gmoboekiodfcajledjijioecfimliddo?hl=en','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(12,'SitePoint: Truthy and Falsy: When All is Not Equal in JavaScript — SitePoint','Anything in JavaScript can be considered to be either truthy or falsy. Craig provides a useful guide explaining what they are and the bizarre rules that apply when they\'re compared.','https://www.sitepoint.com/javascript-truthy-falsy/','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(13,'GitHub: standard/eslint-config-standard','eslint-config-standard - ESLint Config for JavaScript Standard Style','https://github.com/standard/eslint-config-standard','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(14,'WakaTime: Metrics for programmers automatically generated from your coding activity','Open-source text editor plugins for metrics about your programming.','https://wakatime.com/','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(15,'multiple ajax calls wait for last one to load, then execute','I have multiple ajax queries running at the same time, and I want them to wait for the last one to return, and then run the success handler on all of the ajax calls. For a simplified example, cons...','https://stackoverflow.com/questions/14465177/multiple-ajax-calls-wait-for-last-one-to-load-then-execute','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(16,'CSS Guidelines','High-level advice and guidelines for writing sane, manageable, scalable CSS','https://cssguidelin.es/','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(17,'You Might Not Need jQuery','Examples of how to do common event, element, ajax and utility operations with plain javascript.','http://youmightnotneedjquery.com/','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(18,'Dash for macOS - API Documentation Browser, Snippet Manager - Kapeli','Dash is an API Documentation Browser and Code Snippet Manager. Dash searches offline documentation of 150+ APIs and stores snippets of code. You can also generate your own documentation sets.','https://kapeli.com/dash','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(19,'Trello','Infinitely flexible. Incredibly easy to use. Great mobile apps. It\'s free. Trello keeps track of everything, from the big picture to the minute details.','https://trello.com/','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(20,'Grid Garden','A game for learning CSS grid layout','http://cssgridgarden.com/','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(21,'Which is better, number(x) or parseFloat(x)?','Which is better? I\'m asking this just for the sake of shaving a few bytes, as I can use +x instead of number(x). Does parsefloat do something better? EDIT: Verdict - parseFloat. Even if using +...','https://stackoverflow.com/questions/12227594/which-is-better-numberx-or-parsefloatx','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(22,'YouTube Video: CSS Grid Changes EVERYTHING - Amazing Presentation',NULL,'https://www.youtube.com/watch?v=7kVeCqQCxlk','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(23,'Code Envato Tuts+: Team Collaboration With GitHub','GitHub has become the corner stone for all things open source software. Developers love it, collaborate on it and are constantly building awesome projects through it. Apart from hosting our code,...','https://code.tutsplus.com/articles/team-collaboration-with-github--net-29876','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(24,'            GitHub Flow –          Scott Chacon   ','Some information by and about Scott Chacon','http://scottchacon.com/2011/08/31/github-flow.html','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(25,'Flexbox Froggy','A game for learning CSS flexbox','http://flexboxfroggy.com/','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(26,'Wireframe.cc: Wireframe.cc - minimal wireframing tool','A simple wireframing tool that doesn\'t get in your way. Create and share simple wireframes of websites and mobile apps.','https://wireframe.cc/','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(27,'TechCrunch Link: With 200M daily users, Giphy will soon test sponsored&nbsp;GIFs','And it&rsquo;s about time.\nGiphy, the four-year-old search engine for GIFs, is going to finally start testing monetization.\nAccording to a source close to the company, Giphy will begin testing sponsored GIFs within messaging experiences. This means that users who search for GIFs may be served a sponsored GIF within the messaging tab.\nThere are some obvious use-cases here: A search for &ldquo;Monday&rdquo; or &ldquo;morning&rdquo; might turn up a Starbucks GIF. But there is also an opportunity for brands, especially movies and TV shows (which makes up a huge portion of Giphy&rsquo;s content), to work their existing content into people&rsquo;s messages.\nStructurally, this isn&rsquo;t too different from what Google does with search terms. If you search for &ldquo;Walmart,&rdquo; you&rsquo;ll more than likely see a sponsored listing for both Walmart and Target.\nWith Giphy, however, searches are rarely for specific brands but rather based around certain actions, reactions or emotions. With the forthcoming sponsored messaging product, a search for &ldquo;Wooo&rdquo; might turn up a GIF of someone pouring Jose Cuervo shots. A search for &ldquo;cheers&rdquo; might show folks clinking two Budweiser beer bottles together. (If Netflix doesn&rsquo;t buy ads against &ldquo;chill,&rdquo; I&rsquo;ll be really disappointed.)\nWhat&rsquo;s more, sponsored content on Giphy would function in a way similar to Snapchat&rsquo;s sponsored face filters. Even if it includes branded content, the fact that it comes from a friend makes it worth watching and makes it easier to connect with.\nThe same source also said that Giphy is now seeing 200 million daily active users between both the API and website, with around 250 million monthly active users on the website, as well as Giphy&rsquo;s owned and operated integrations. That means the majority of Giphy&rsquo;s users are interacting with the service every single day.\nNeither my source, nor Giphy, would confirm a timeline for the launch of ad products. That said, Giphy COO Adam Leibsohn did confirm that the company has shifted focus from growth to building ad products, without adding much detail on what those products might look like.\n&ldquo;With GIPHY Studios, we&rsquo;ve been executing on creative partnerships for over a year,&rdquo; said Leibsohn. &ldquo;That work helps inform our thinking and exploration around what our ad products will look like.&rdquo;\nI also asked Leibsohn which brands would be the first to test out Giphy&rsquo;s ad products.\n&ldquo;We already work closely with the world&rsquo;s leading brands in content, entertainment, technology and advertising,&rdquo; said Leibsohn. &ldquo;When we&rsquo;re ready to launch our ad products, it naturally follows that we&rsquo;ll be working with our existing partners.&rdquo;\nAs far as testing is concerned, it&rsquo;s unclear which platform Giphy will wade into first. Nor is it clear what sort of a business model sponsored content would take when served on a third-party platform, outside of Giphy&rsquo;s own site and app.\nSlack, iMessage, Facebook Messenger and Twitter are all huge platforms for Giphy, but they may be a little too big to do initial testing. Remember, Giphy is the same company that launches standalone app after standalone app simply to learn what will and won&rsquo;t work with its users.\nStrategically, the best place for Giphy to start testing sponsored content would be Tinder, in my opinion. Tinder has an integration with Giphy that gets a lot of play &mdash; in fact, one of the top 25 most popular Giphy GIFs from last year climbed the charts courtesy of Tinder users.\n\nAnd while Tinder and Giphy are a match made in (user engagement) heaven, it&rsquo;s not as high-stakes as debuting an ad product on a public platform like Twitter, nor is it as tricky or unpredictable as the mostly professional environment of Slack.\nTinder did not immediately respond to a request for comment.\nGiphy has a lot of options when it comes to generating revenue. Alongside selling sponsored content within messaging, the company also sees a ton of traffic to the Giphy website. In fact, Giphy says that more than 50 percent of the people who come to the company&rsquo;s website are coming with the intent to browse.\nThis opens up the opportunity to sell native ads, via search terms, on the website, too.\nPlus, Giphy currently works to &lsquo;live-gif&rsquo; big events like the Oscars, Golden Globes, etc. For now, Giphy&rsquo;s team does this for free, but you can see how they might eventually start inking licensing deals around these events. And that doesn&rsquo;t even include the troves of old content &mdash; think &ldquo;Full House&rdquo; and &ldquo;Seinfeld&rdquo; &mdash; that Giphy turns into GIFs for big broadcast and cable networks.\nWhile many believe that P2P native content will be a huge part of the future of advertising, it hasn&rsquo;t become immediately clear what a successful version of that will actually look like. But, in a relatively short time, Giphy has become an ingrained part of the way we communicate, whether it&rsquo;s in iMessage, on Twitter, Tinder or Slack.\nGiphy picked up $72 million in October 2016, bringing total raised to $150 million at a reported valuation of $600 million.','https://techcrunch.com/2017/07/31/with-200m-daily-users-giphy-will-soon-test-sponsored-gifs/','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(28,'GitHub: getify/You-Dont-Know-JS','You-Dont-Know-JS - A book series on JavaScript. @YDKJS on twitter.','https://github.com/getify/You-Dont-Know-JS','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(29,'GitHub: denysdovhan/wtfjs','wtfjs - A list of funny and tricky JavaScript examples','https://github.com/denysdovhan/wtfjs','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(30,'YouTube Video: dotJS 2012 - Brian Leroux - WTFJS',NULL,'https://www.youtube.com/watch?v=et8xNAc2ic8','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(31,'reddit: A home for ideas by people who lack time, money, or skills. • r/SomebodyMakeThis','reddit: the front page of the internet','https://www.reddit.com/r/SomebodyMakeThis/','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(32,'Sessions College: Color Wheel - Color Calculator | Sessions College','Use the color wheel to find the perfect color scheme with the Sessions College color calculator. Endless free color combinations, working from any base color.','https://www.sessions.edu/color-calculator/','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(33,'In love with colors, since 2002. A designer tool for creating color combinations that work together well. Formerly known as Color Scheme Designer. Use the color wheel to create great color palettes.','In love with colors, since 2002. A designer tool for creating color combinations that work together well. Formerly known as Color Scheme Designer. Use the color wheel to create great color palettes.','http://paletton.com/#uid=33Y1o0kl6lPawxafQr6qegIvBbi','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(34,'#a8cc7f Color Hex','#a8cc7f color hex, #a8cc7f color chart,rgb,hsl,hsv color number values, html css color codes and html code samples.','http://www.color-hex.com/color/a8cc7f','2017-10-03 19:30:47','2017-10-03 19:30:47',1),
	(35,'CSS-Tricks: CSS Triangle | CSS-Tricks','HTML You can make them with a single div. It\'s nice to have classes for each direction possibility. CSS The idea is a box with zero width and height. The a','https://css-tricks.com/snippets/css/css-triangle/','2017-10-03 19:30:48','2017-10-03 19:30:48',1),
	(36,'CodePen: Animation to Explain CSS Triangles','I\'ve been wanting to do this forever, but this Pen <http://codepen.io/Tresva/pen/dxHsb> finally pushed me over the edge to do it. Hacker news if anyone ...','https://codepen.io/chriscoyier/pen/lotjh','2017-10-03 19:30:48','2017-10-03 19:30:48',1),
	(37,'How to Use Google and Other Tips for Finding Programming Help - CodeProject','A primer for people looking to learn to help themselves find answers to programming questions; Author: Christian Graus; Updated: 8 Mar 2008; Section: Programming Tips; Chapter: General Programming; Updated: 8 Mar 2008','https://www.codeproject.com/Articles/24213/How-to-Use-Google-and-Other-Tips-for-Finding-Progr','2017-10-03 19:30:48','2017-10-03 19:30:48',1),
	(38,'State Of JavaScript: The State Of JavaScript','A short survey about current popular JavaScript technologies.','http://stateofjs.com/','2017-10-03 19:30:48','2017-10-03 19:30:48',1),
	(39,'Bootstrap','The most popular HTML, CSS, and JS library in the world.','https://getbootstrap.com/','2017-10-03 19:30:48','2017-10-03 19:30:48',1),
	(40,'How, in general, does Node.js handle 10,000 concurrent requests?','I understand that Node.js uses a single-thread and an event loop to process requests only processing one at a time (which is non-blocking). But still, how does that work, lets say 10,000 concurrent','https://stackoverflow.com/questions/34855352/how-in-general-does-node-js-handle-10-000-concurrent-requests','2017-10-03 19:30:48','2017-10-03 19:30:48',1),
	(41,'npm Documentation','The place where all things npm are documented','https://docs.npmjs.com/','2017-10-03 19:30:48','2017-10-03 19:30:48',1),
	(42,'Mockaroo  - Random Data Generator | CSV / JSON / SQL / Excel','A free test data generator - Mockaroo lets you create custom CSV, JSON, SQL, and Excel datasets to test and demo your software.','https://mockaroo.com/','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(43,'Telerik Developer Network: Understanding Scope in JavaScript','Scope tells the compiler where to look for variables &amp; functions when it needs them - Wissam Abirached explains the different ways this works in JavaScript.','https://developer.telerik.com/topics/web-development/understanding-scope-in-javascript/','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(44,'The Practical Dev: 10 JavaScript concepts you need to know for interviews','From the <http://dev.to|dev.to>() community. Sharing ideas that makes us all better developers.','https://dev.to/arnavaggarwal/10-javascript-concepts-you-need-to-know-for-interviews','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(45,'YouTube Video: Prototypes in JavaScript - FunFunFunction #16',NULL,'https://www.youtube.com/watch?v=riDVvXZ_Kb4','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(46,'YouTube: Fun Fun Function','I’m Mattias Petter Johansson, mpj for short. I’ve been a full-time programmer for about ten years. I’ve worked for Absolut Vodka, Blackberry and currently wo...','https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(47,'Udemy: Udemy Online Courses - Learn Anything, On Your Schedule','Udemy is an online learning and teaching marketplace with over 45,000 courses and 15 million students. Learn programming, marketing, data science and more.','https://www.udemy.com/','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(48,'npm: mysql','A node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.','https://www.npmjs.com/package/mysql','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(49,'Getting MySQL path in command prompt','How can i get the mysql installation path up to bin folder using command prompt in <http://windows.Is|windows.Is> there any command to get the location of mysql installation path?','https://stackoverflow.com/questions/14805567/getting-mysql-path-in-command-prompt','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(50,'How to add MySQL to $PATH variable to resolve \"mysql: command not found\"?','I installed MySQL on my Mac, and now I would like to add it to my $PATH variable. I want to be able to type mysql anywhere. I tried adding the following to my .profile file: export PATH=${PATH}/usr/','https://apple.stackexchange.com/questions/176786/how-to-add-mysql-to-path-variable-to-resolve-mysql-command-not-found','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(51,'SitePoint: Understanding JOINs in MySQL and Other Relational Databases','SQL JOINs are often misunderstood and one of the biggest causes of database optimization problems. This brief tutorial explains JOINs and their use in MySQL and other relational databases.','https://www.sitepoint.com/understanding-sql-joins-mysql-database/','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(52,'Axess Lab: How icons are ruining interfaces - Axess Lab','Icons used correctly can enhance both the user experience and look of your interface. Sadly, more and more designers are using them in the wrong way. And it’s hurting both the usability and accessibility of the interface. My dad and his TED app I love to watch my dad use technology. It’s such a great …','https://axesslab.com/icons-ruining-interfaces/','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(53,'GitHub: mr-mig/every-programmer-should-know','every-programmer-should-know - A collection of (mostly) technical things every software developer should know','https://github.com/mr-mig/every-programmer-should-know','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(54,'Atlassian: Git cheat sheet | Atlassian Git Tutorial','Git cheat sheet that serves as a quick reference for basic Git commands to help you learn Git. Git branches, remote repositories, undoing changes, and more','https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(55,'Explain and example about \'get\', \'delete\', \'post\', \'put\', \'options\', \'patch\', \'head\' method?','I\'m writing a webservice. Could any one explain these above methods and give me some example about them? Thank for your help.','https://stackoverflow.com/questions/27030649/explain-and-example-about-get-delete-post-put-options-patch-h','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(56,'HTTP Status Codes','HTTP status codes and how to use them in RESTful API or Web Services.','http://www.restapitutorial.com/httpstatuscodes.html','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(57,'ogsite_name: Fresh Brewed Frontend','Fresh Brewed Frontend is THE web developer newsletter for those looking to focus on the latest news, best practices, and techniques in frontend development. We find the content worth reading so you won\'t have to.','https://freshbrewed.co/frontend/','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(58,'Code School: Express.js Tutorial | Code School','Express provides more robust features to your web application. Learn how to build Web APIs in Node using Express.','https://www.codeschool.com/courses/building-blocks-of-express-js','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(59,'Online Markdown Editor - Dillinger, the Last Markdown Editor ever.','Dillinger is an online cloud based HTML5 filled Markdown Editor. Sync with Dropbox, Github, Google Drive or OneDrive. Convert HTML to Markdown. 100% Open Source!','https://dillinger.io/','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(60,'GitHub: remy/nodemon','nodemon - Monitor for any changes in your node.js application and automatically restart the server - perfect for development','https://github.com/remy/nodemon','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(61,'Sails.js | Realtime MVC Framework for Node.js','Sails.js makes it easy to build custom, enterprise-grade Node.js apps. It is designed to resemble the MVC architecture from frameworks like Ruby on Rails, but with support for the more modern, data-oriented style of web app development. It\'s especially good for building realtime features like chat.','http://sailsjs.com/','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(62,'Code School Blog: 10 Web Development Podcasts You Should Be Subscribed To - Code School Blog','As a developer, it’s crucial to practice your craft to keep your skills sharp.','https://www.codeschool.com/blog/2015/11/20/10-web-development-podcasts-you-should-be-subscribed-to/','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(63,'Should PUT and DELETE be used in forms?','Assuming my web application has full support of PUT and DELETE on the server side, should I make use of them? Basically my question is how many browsers support this: &lt;form method=\"PUT\"&gt; ...','https://stackoverflow.com/questions/5162960/should-put-and-delete-be-used-in-forms','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(64,'CSS-Tricks: \"The Notch\" and CSS | CSS-Tricks','Apple\'s iPhone X has a screen that covers the entire face of the phone, save for a \"notch\" to make space for a camera and other various components. The res','https://css-tricks.com/the-notch-and-css/','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(65,'WebKit: Designing Websites for iPhone X',NULL,'https://webkit.org/blog/7929/designing-websites-for-iphone-x/','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(66,'TodoMVC','Helping you select an MV* framework - Todo apps for Backbone.js, Ember.js, AngularJS and many more','http://todomvc.com/','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(67,'RegexOne - Learn Regular Expressions - Lesson 1: An Introduction, and the ABCs','RegexOne provides a set of interactive lessons and exercises to help you learn regular expressions','https://regexone.com/','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(68,'Regex101 - online regex editor and debugger','Regex101 allows you to create, debug, test and have your expressions explained for PHP, PCRE, Python, Golang and JavaScript. The website also features a community where you can share useful expressions.','https://regex101.com/#javascript','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(69,'plainJS - fast and lightweight JavaScript tools','Vanilla JavaScript for writing powerful web applications without jQuery.','https://plainjs.com/','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(70,'freeCodeCamp: I spent 3 months applying to jobs after a coding bootcamp. Here’s what I learned.','A less-talked about part of the bootcamper’s journey is what happens after you graduate — when you’re searching for that six-figure…','https://medium.freecodecamp.org/5-key-learnings-from-the-post-bootcamp-job-search-9a07468d2331','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(71,'HNPWA','Hacker News readers as Progressive Web Apps','https://hnpwa.com/','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(72,'Moocha - Search engine for online courses','Search for MOOCs and online courses from platforms including Coursera, edX, MIT OpenCoursWware, Udacity, and Futurelearn.','https://www.moocha.io/','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(73,'YouTube Video: Sequelize + Handlebars Review',NULL,'https://www.youtube.com/watch?v=EDgpYNqItmc&amp;index=1-ZiCqgm3dw7Cvrewq2','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(74,'Mozilla Developer Network: Strict mode','ECMAScript 5 \'s strict mode is a way to opt in to a restricted variant of JavaScript. Strict mode isn\'t just a subset: it intentionally has different semantics from normal code. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don\'t rely on strict mode without feature-testing for support for the relevant aspects of strict mode. Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.','https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(75,'Chai','Chai is a BDD / TDD assertion library for [node](<http://nodejs.org>) and the browser that can be delightfully paired with any javascript testing framework.','http://chaijs.com/','2017-10-03 19:30:54','2017-10-03 19:30:54',1),
	(76,'GitHub: segmentio/nightmare','nightmare - A high-level browser automation library.','https://github.com/segmentio/nightmare','2017-10-03 19:30:54','2017-10-03 19:30:54',1);

/*!40000 ALTER TABLE `Resources` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;

INSERT INTO `Users` (`id`, `name`, `email`, `createdAt`, `updatedAt`)
VALUES
	(1,'Walter Augustine','walter.augustine10@gmail.com','2017-10-03 18:43:21','2017-10-03 18:43:21'),
	(2,'Ed Orsini','edorsini@gmail.com','2017-10-03 18:44:42','2017-10-03 18:44:42'),
	(3,'Tyler Schade','tylerschade99@gmail.com','2017-10-03 18:44:42','2017-10-03 18:44:42');

/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
