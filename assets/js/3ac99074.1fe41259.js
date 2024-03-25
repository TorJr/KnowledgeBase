"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[9782],{4137:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(i),h=n,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return i?a.createElement(f,o(o({ref:t},c),{},{components:i})):a.createElement(f,o({ref:t},c))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<r;d++)o[d]=i[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},3964:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=i(7462),n=(i(7294),i(4137));const r={title:"AdGuard filter policy",sidebar_position:6},o=void 0,s={unversionedId:"general/ad-filtering/filter-policy",id:"general/ad-filtering/filter-policy",title:"AdGuard filter policy",description:"At AdGuard, we\u2019ve long followed certain principles in making our filters, which, along with filter descriptions, are outlined below as part of our filtering policy.",source:"@site/docs/general/ad-filtering/filter-policy.md",sourceDirName:"general/ad-filtering",slug:"/general/ad-filtering/filter-policy",permalink:"/KnowledgeBase/general/ad-filtering/filter-policy",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/ad-filtering/filter-policy.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"AdGuard filter policy",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"How to create your own ad filters",permalink:"/KnowledgeBase/general/ad-filtering/create-own-filters"},next:{title:"What is HTTPS filtering",permalink:"/KnowledgeBase/general/https-filtering/what-is-https-filtering"}},l={},d=[{value:"Common criteria",id:"common-criteria",level:2},{value:"Ad blocking filters",id:"ad-blocking-filters",level:2},{value:"Terminology",id:"terminology",level:3},{value:"Filters",id:"filters",level:3},{value:"The purpose of these filters",id:"the-purpose-of-these-filters",level:3},{value:"Limitations and exceptions",id:"limitations-and-exceptions",level:3},{value:"Tracking protection filters",id:"tracking-protection-filters",level:2},{value:"Terminology",id:"terminology-1",level:3},{value:"Filters",id:"filters-1",level:3},{value:"The purpose of these filters",id:"the-purpose-of-these-filters-1",level:3},{value:"Limitations and exceptions",id:"limitations-and-exceptions-1",level:3},{value:"Annoyance filters",id:"annoyance-filters",level:2},{value:"Terminology",id:"terminology-2",level:3},{value:"Filters",id:"filters-2",level:3},{value:"The purpose of these filters",id:"the-purpose-of-these-filters-2",level:3},{value:"AdGuard Cookie Notices filter",id:"adguard-cookie-notices-filter",level:4},{value:"AdGuard Popups filter",id:"adguard-popups-filter",level:4},{value:"AdGuard Mobile App Banners filter",id:"adguard-mobile-app-banners-filter",level:4},{value:"AdGuard Widgets filter",id:"adguard-widgets-filter",level:4},{value:"AdGuard Other Annoyances filter",id:"adguard-other-annoyances-filter",level:4},{value:"Social media filters",id:"social-media-filters",level:2},{value:"Filters",id:"filters-3",level:3},{value:"The purpose of these filters",id:"the-purpose-of-these-filters-3",level:3},{value:"Limitations and exceptions",id:"limitations-and-exceptions-2",level:3},{value:"Other filters",id:"other-filters",level:2},{value:"Terminology",id:"terminology-3",level:3},{value:"Filters",id:"filters-4",level:3},{value:"The purpose of these filters",id:"the-purpose-of-these-filters-4",level:3},{value:"Filter unblocking search ads and self-promotion",id:"filter-unblocking-search-ads-and-self-promotion",level:4},{value:"AdGuard DNS filter",id:"adguard-dns-filter",level:4},{value:"AdGuard Experimental filter",id:"adguard-experimental-filter",level:4}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"At AdGuard, we\u2019ve long followed certain principles in making our filters, which, along with filter descriptions, are outlined below as part of our filtering policy."),(0,n.kt)("h2",{id:"common-criteria"},"Common criteria"),(0,n.kt)("p",null,"These criteria are equally applied to the rules of all filters."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rules for a specific site will only be added if there is sufficient traffic. Traffic is determined by public statistics (if available) or indirect indicators, such as the number of subscribers on social networks. A site\u2019s traffic is considered sufficient if it reaches 100,000 visits per month. We will consider adding a rule for a site that is not as popular, but the final decision rests with filter developers. Sites with low traffic should still be checked for third-party analytics and advertising networks"),(0,n.kt)("li",{parentName:"ul"},"The decision about content farms (websites that produce large amounts of content primarily aimed at achieving high visibility in search results and generating advertising revenue) is made by filter developers depending on the quality of the content")),(0,n.kt)("p",null,"Quality requirements for filtering rules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rules should not negatively impact the websites in terms of performance"),(0,n.kt)("li",{parentName:"ul"},"Unblocking rules must be as specific as possible to avoid unblocking anything unnecessary"),(0,n.kt)("li",{parentName:"ul"},"JavaScript rules should be used as sparingly as possible and only if blocking ads is impossible without them")),(0,n.kt)("h2",{id:"ad-blocking-filters"},"Ad blocking filters"),(0,n.kt)("h3",{id:"terminology"},"Terminology"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Ad blocker")," is a software or hardware tool designed to filter, hide, or block advertisements and other elements on web pages. Ad blockers are created to improve user experience, reduce page load times, decrease internet traffic consumption, block ads, enhance privacy while browsing websites and using applications, and block annoying elements."),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"filter")," (or a ",(0,n.kt)("strong",{parentName:"p"},"filter list"),") is a set of filtering rules designed to filter content and block various types of advertisements and other types of content using ad blockers. These filters usually operate at the level of the web browser, programs, or DNS server."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Anti-adblock")," is a technology used by websites or applications intended to detect ad blocking and react to it in different ways: tracking, reinjecting ads, encouraging to disable ad blocker (so called \u201cadblock walls\u201d). Anti-adblocks may be of different types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Anti-adblock that blocks website content without offering an alternative: to continue using the site, the user must disable the ad blocker on the site"),(0,n.kt)("li",{parentName:"ul"},"\u201cAnti-adblock wall\u201d with alternative options offered, such as purchasing a subscription to continue using the ad blocker"),(0,n.kt)("li",{parentName:"ul"},"Informational messages that do not obligate action: users are asked to disable the ad blocker, but these messages can be closed, allowing users to continue using the site without restrictions"),(0,n.kt)("li",{parentName:"ul"},"Implementing alternative advertising in response to ad blocker usage: sites introduce alternative advertising when ad blockers are detected"),(0,n.kt)("li",{parentName:"ul"},"Paywall: a method of content monetization where content is partially or fully hidden from users, with a message prompting them to purchase a subscription for access")),(0,n.kt)("h3",{id:"filters"},"Filters"),(0,n.kt)("p",null,"AdGuard ad-blocking filters include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AdGuard Base filter"),(0,n.kt)("li",{parentName:"ul"},"AdGuard Mobile Ads filter"),(0,n.kt)("li",{parentName:"ul"},"Regional filters divided by language principle \u2014 Chinese, Dutch, French, German, Japanese, Russian, Spanish/Portuguese, Turkish, and Ukrainian")),(0,n.kt)("h3",{id:"the-purpose-of-these-filters"},"The purpose of these filters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Base filter")," is designed to block ads on English-language websites and those for which there is no separate filter. It also contains general filtering rules that apply to all sites regardless of language"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Mobile Ads filter")," blocks advertisements on mobile versions of websites and within mobile apps. There is no segmentation based on language"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Regional filters")," follow the same policy as the ",(0,n.kt)("strong",{parentName:"li"},"Base filter"),", but limited to websites in certain languages")),(0,n.kt)("p",null,"The goal of ad-blocking filters is to block all types of advertising on websites, applications, and certain devices that can load ads from the Internet:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Banners \u2014 advertisements displayed as images in various parts of web pages"),(0,n.kt)("li",{parentName:"ul"},"Teasers \u2014 text or graphical ads, often animated, designed to intrigue visitors (sensational headlines, attention-grabbing images) and prompt them to click on the banner (clickbait)"),(0,n.kt)("li",{parentName:"ul"},"Text ads \u2014 advertising in the form of text, including links"),(0,n.kt)("li",{parentName:"ul"},"Modal adverts \u2014 advertising that suddenly appears over the current content in the form of modal windows"),(0,n.kt)("li",{parentName:"ul"},"Popunders \u2014 advertising that opens in a separate window under the current one, when clicked anywhere on the page"),(0,n.kt)("li",{parentName:"ul"},"Redirect advertising \u2014 mechanisms which automatically redirect users to another site after clicking"),(0,n.kt)("li",{parentName:"ul"},"Ads disguised as site content, which open pages with promoted products or unrelated content upon clicking"),(0,n.kt)("li",{parentName:"ul"},"Video ads \u2014 advertisement videos embedded within video content or in separate ad elements on websites and applications"),(0,n.kt)("li",{parentName:"ul"},"Interactive ads \u2014 ads with which users can interact (e.g., games and surveys, upon completion of which the advertised item opens)"),(0,n.kt)("li",{parentName:"ul"},"Interstitial ads \u2014 full-screen ads on mobile devices that cover the interface of the app or web browser"),(0,n.kt)("li",{parentName:"ul"},"Ads leftovers that occupy large spaces or stand out against the background and attract visitors' attention (except barely discernible or unnoticeable ones)"),(0,n.kt)("li",{parentName:"ul"},"Anti-adblock advertising \u2014 alternative advertising displayed on the site when the main one is blocked"),(0,n.kt)("li",{parentName:"ul"},"Site\u2019s own advertising, if it has been blocked by general filtering rules (see ",(0,n.kt)("em",{parentName:"li"},"Limitations and exceptions"),")"),(0,n.kt)("li",{parentName:"ul"},"Anti-adblock scripts that prevent site usage (see ",(0,n.kt)("em",{parentName:"li"},"Limitations and exceptions"),")"),(0,n.kt)("li",{parentName:"ul"},"Advertising injected by malware, if detailed information about its loading method or steps for reproduction is provided"),(0,n.kt)("li",{parentName:"ul"},"Unwanted mining \u2014 scripts that mine cryptocurrency without user consent")),(0,n.kt)("h3",{id:"limitations-and-exceptions"},"Limitations and exceptions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The site\u2019s own advertising should not be deliberately blocked. However, it should not be unblocked if the blocking is caused by general filtering rules"),(0,n.kt)("li",{parentName:"ul"},"Content access measures like paywalls are not blocked"),(0,n.kt)("li",{parentName:"ul"},"Anti-adblock walls will be blocked in the following cases:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"They aggressively insist on disabling or removing the ad blocker or effectively prevent using the website"),(0,n.kt)("li",{parentName:"ul"},"They feature incorrect and misleading descriptions of possible consequences of ad blockers\u2019 use"),(0,n.kt)("li",{parentName:"ul"},"They put visitors at risk of malvertising \u2014 when unblocked advertisements come from dubious sources"))),(0,n.kt)("li",{parentName:"ul"},"We do not block ad blocker detection messages that satisfy at least one of the following criteria:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"They allow the usage of the website and do not overlay the significant amount of content"),(0,n.kt)("li",{parentName:"ul"},"They provide an alternative to disabling an ad blocker given that this alternative does not put the users\u2019 privacy or security at risk"),(0,n.kt)("li",{parentName:"ul"},"They allow the user to proceed to the website\u2019s content or offer a feasible value exchange that does not put the user\u2019s privacy or security at risk"),(0,n.kt)("li",{parentName:"ul"},"Some legacy rules may continue to block messages that satisfy one or more of these criteria. If identified, such rules will be handled according to this policy"))),(0,n.kt)("li",{parentName:"ul"},"Mining pools are not blocked if they are public and not used solely for malicious purposes")),(0,n.kt)("h2",{id:"tracking-protection-filters"},"Tracking protection filters"),(0,n.kt)("h3",{id:"terminology-1"},"Terminology"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tracking")," \u2014 the process of monitoring and collecting data about users and their interactions with websites and applications for marketing purposes, as well as to obtain telemetry about the functioning of websites or applications for the purpose of analyzing their operation. This process includes tracking visited pages, time spent, interaction with website elements (e.g., clicks, form submissions), and other metrics. It allows website and application owners to better understand user behavior, optimize functionality, and adapt marketing strategies. Tracking is also used to monitor performance, usage patterns, and identify issues, providing developers with the necessary data to improve the stability and quality of the website or application. Even if the data obtained cannot reveal a person\u2019s identity, such actions are still considered tracking."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tracker")," \u2014 software used on a website or in an application and designed to collect information about their operation and visitors\u2019 actions. It tracks user interaction with the website or application, recording data about page views, time spent, clicks, form submissions, and other events. Its purpose is to provide website and application owners with a tool for analyzing user behavior, improving the user experience, and optimizing content and advertising."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"URL tracking parameter")," \u2014 a part of the address that is added to links by analytics systems or present in some links on web pages. When a request is made, this URL tracking parameter can be processed by the backend of an analytics system or website, which will extract information from it. For example, URL tracking parameters can transmit information about clicks or advertising campaigns. URL tracking parameters can also be used by fraud protection or bot detection systems."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cookies")," \u2014 files that websites send to and store on devices. These files contain various information \u2014 both necessary for the functioning of the site on the device and used for analytics purposes \u2014 unique identifiers used to track visitor activity on the website, advertising parameters, and more."),(0,n.kt)("h3",{id:"filters-1"},"Filters"),(0,n.kt)("p",null,"AdGuard tracking protection filters include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AdGuard Tracking Protection filter"),(0,n.kt)("li",{parentName:"ul"},"AdGuard URL Tracking filter")),(0,n.kt)("h3",{id:"the-purpose-of-these-filters-1"},"The purpose of these filters"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tracking Protection filter")," is designed to block trackers that collect users\u2019 personal data and to improve users\u2019 privacy."),(0,n.kt)("p",null,"What it blocks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Analytics systems\u2019 scripts"),(0,n.kt)("li",{parentName:"ul"},"Websites\u2019 and applications\u2019 own tracking scripts"),(0,n.kt)("li",{parentName:"ul"},"Masked CNAME trackers"),(0,n.kt)("li",{parentName:"ul"},"Tracking cookies"),(0,n.kt)("li",{parentName:"ul"},"Tracking pixels"),(0,n.kt)("li",{parentName:"ul"},"Tracking APIs of browsers"),(0,n.kt)("li",{parentName:"ul"},"Privacy Sandbox functionality in Google Chrome and its forks used for tracking (Google Topics API, the Protected Audience API)")),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"URL Tracking filter")," is designed to remove tracking parameters from web addresses"),(0,n.kt)("h3",{id:"limitations-and-exceptions-1"},"Limitations and exceptions"),(0,n.kt)("p",null,"Tracking protection filters should not block a tracker if blocking would disrupt the correct functioning of the website:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Anti-bots and fraud protection if it interferes with using the site. For example, with PerimeterX or hCaptcha blocking causes problems when the site attempts to verify its visitor with a captcha"),(0,n.kt)("li",{parentName:"ul"},"Error tracking systems like Sentry or Bugsnag are not blocked")),(0,n.kt)("h2",{id:"annoyance-filters"},"Annoyance filters"),(0,n.kt)("p",null,"Annoyance filters are designed to improve the usability of websites by blocking elements on pages that are not advertisements but distract from and interfere with site interaction or content consumption \u2014 such as various modal windows and interactive forms, cookie consent notifications and requests, mobile app banners, and various widgets."),(0,n.kt)("h3",{id:"terminology-2"},"Terminology"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cookie notice")," \u2014 a form that describes the types and use of cookies on a website. A cookie notice appears when a user visits the website, informing the user that the website uses cookies or other tracking technologies to collect and use personal information, and explaining why and with whom the information collected is shared."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CMP (Consent Management Platform)")," \u2014 software that helps websites comply with cookie usage rules. CMPs limit cookies usage until user consent is obtained, providing users with the option to accept certain cookies and manage privacy settings."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Widget")," \u2014 a user interface element that extends the functionality of a website. Web widgets are integrated into web pages and can include interactive elements such as buttons, forms, or banners. They can provide users with access to specific services or content without requiring navigation to other pages."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Popup")," \u2014 a window that appears above the current web page. It is intended to display additional information, advertisements, notifications, or data entry forms. Popups usually block the view of the main content of the page and require user action to close, which can be irritating."),(0,n.kt)("h3",{id:"filters-2"},"Filters"),(0,n.kt)("p",null,"For better customization, annoyance filters are divided by their purpose:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AdGuard Cookie Notices filter"),(0,n.kt)("li",{parentName:"ul"},"AdGuard Popups filter"),(0,n.kt)("li",{parentName:"ul"},"AdGuard Mobile App Banners filter"),(0,n.kt)("li",{parentName:"ul"},"AdGuard Widgets filter"),(0,n.kt)("li",{parentName:"ul"},"AdGuard Other Annoyances filter"),(0,n.kt)("li",{parentName:"ul"},"AdGuard Annoyances filter \u2014 a combined filter that includes all 5 specialized annoyance filters")),(0,n.kt)("h3",{id:"the-purpose-of-these-filters-2"},"The purpose of these filters"),(0,n.kt)("h4",{id:"adguard-cookie-notices-filter"},"AdGuard Cookie Notices filter"),(0,n.kt)("p",null,"This filter is designed to block both cookie notices and requests from cookie management platforms (CMPs). Various methods may be applied to cookie notices and CMPs. In most cases, simply hiding or blocking the corresponding scripts is sufficient. However, when the site\u2019s functionality and display of third-party content require cookie consent, the following methods are applied:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Scriptlets are used to bypass the consent request (practically not applicable on sites with restrictions on loading third-party content until a decision is made)"),(0,n.kt)("li",{parentName:"ul"},"Setting a cookie or key in the site\u2019s local storage in such a way that the script considers the user to have made a choice"),(0,n.kt)("li",{parentName:"ul"},"Simulating user action using a rule that clicks a specified button and interrupts its execution 10 seconds after loading. Two options are possible:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Reject (except for functional cookies \u2014 depending on the CMP system) \u2014 the preferred option, as there is less risk of loading additional analytics tools"),(0,n.kt)("li",{parentName:"ul"},"Accept \u2014 this option is used as the last resort if other methods fail. In this case, the site is additionally checked for the use of analytics tools, which are then blocked by the ",(0,n.kt)("strong",{parentName:"li"},"AdGuard Tracking Protection filter"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Limitations and exceptions")),(0,n.kt)("p",null,"In some cases, the decision to add rules is made independently by filter developers; mostly, when the choice made when simulating actions would affect the site\u2019s functionality (for example, history may not work, or user settings may not be saved on such a site)."),(0,n.kt)("h4",{id:"adguard-popups-filter"},"AdGuard Popups filter"),(0,n.kt)("p",null,"This is a filter that blocks various popups on web pages that are not necessary for normal site usage, including but not limited to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Requests for permission to receive push notifications"),(0,n.kt)("li",{parentName:"ul"},"Popups and forms for subscribing to news, promotions, and various events, including third-party channels for receiving them (such as Google News, Telegram)"),(0,n.kt)("li",{parentName:"ul"},"Popups that encourage users to disable ad blocker and violate user\u2019s privacy (at the discretion of the filter developers)"),(0,n.kt)("li",{parentName:"ul"},"Other types of popups that may annoy users (at the discretion of filter developers)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Limitations and exceptions")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Push notifications are only blocked on sites where they are not used for practical purposes. For example, in email web clients or tools used for work purposes, such notifications will not be blocked"),(0,n.kt)("li",{parentName:"ul"},"Some popups that do not fall into the categories described above but still interfere with the user\u2019s experience may be also blocked. For example, registration prompts on a site or popups that introduce the site\u2019s features. The decision is made by filter developers"),(0,n.kt)("li",{parentName:"ul"},"Content access measures that ask the user to pay to access the content must not be circumvented")),(0,n.kt)("h4",{id:"adguard-mobile-app-banners-filter"},"AdGuard Mobile App Banners filter"),(0,n.kt)("p",null,"This is a filter that blocks banners and popups that encourage visitors to install mobile apps."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Limitations and exceptions")),(0,n.kt)("p",null,"Banners located in the headers or in the menus of websites are not blocked if they are not animated and do not occupy a significant portion of usable space. If a banner is located in the footer, the decision is made by filter developers case-by-case. Usually, banners in the footer do not stand out against other elements and are not distracting."),(0,n.kt)("h4",{id:"adguard-widgets-filter"},"AdGuard Widgets filter"),(0,n.kt)("p",null,"This is a filter that blocks various widgets that are not essential for the functioning of websites or for interaction with them:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Widgets for content recommendations \u2014 related articles, similar websites, various personalized recommendations"),(0,n.kt)("li",{parentName:"ul"},"Chat widgets that are not integrated with the content and are not the main content of the page"),(0,n.kt)("li",{parentName:"ul"},"Marketing widgets:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Chats for communication with assistants or bots"),(0,n.kt)("li",{parentName:"ul"},"Widgets with product recommendations that are shown to the user"),(0,n.kt)("li",{parentName:"ul"},"Call-back forms"))),(0,n.kt)("li",{parentName:"ul"},"Other widgets that do not have a separate category but may visually clutter the page. For example, weather widgets, currency exchange rates, job listings, and donations")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Limitations and exceptions")),(0,n.kt)("p",null,"This filter doesn\u2019t block:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Widgets closely related to the content of the page, such as comments sections, live chat streams, with an exception of unmoderated chats on sites with unofficial streams, which are often filled with spam and similar content"),(0,n.kt)("li",{parentName:"ul"},"Widgets for self-promotion and site-specific promotional activities"),(0,n.kt)("li",{parentName:"ul"},"Donation widgets, except the cases where they occupy a significant portion of the page and stand out prominently against the content. The decision to block is made by filter developers")),(0,n.kt)("h4",{id:"adguard-other-annoyances-filter"},"AdGuard Other Annoyances filter"),(0,n.kt)("p",null,"This filter is designed to block annoying elements that are not included in other filters, as well as to apply various tweaks. It\u2019s purpose is to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Block self-promotion of websites (any type of advertising promoting goods or services owned by the site owner, without receiving commercial compensation from a third party), if it is considered an annoying element"),(0,n.kt)("li",{parentName:"ul"},"Block annoying elements that are not included in other categories"),(0,n.kt)("li",{parentName:"ul"},"Unblock actions on the page, such as opening the context menu, selecting and copying text, if they are blocked"),(0,n.kt)("li",{parentName:"ul"},"Speed up countdown timers when loading files from websites, if the check is not controlled by the server or is not hindered"),(0,n.kt)("li",{parentName:"ul"},"Apply various rules that may be useful for filter developers. For example, blocking web debugger detection")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Limitations and exceptions")),(0,n.kt)("p",null,"This filter may contain rules that are not suitable for all users. Sometimes it is recommended to disable this filter. The decisions to add rules to this filter are made by filter developers on a rule-by-rule basis."),(0,n.kt)("h2",{id:"social-media-filters"},"Social media filters"),(0,n.kt)("h3",{id:"filters-3"},"Filters"),(0,n.kt)("p",null,"AdGuard Social Media filters include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AdGuard Social Media filter")),(0,n.kt)("h3",{id:"the-purpose-of-these-filters-3"},"The purpose of these filters"),(0,n.kt)("p",null,"This filter will block social media widgets on third-party websites, such as \u201cLike\u201d and \u201cShare\u201d buttons, group widgets, recommendations, and similar widgets."),(0,n.kt)("h3",{id:"limitations-and-exceptions-2"},"Limitations and exceptions"),(0,n.kt)("p",null,"Widgets that are part of the website\u2019s functionality or content, such as comments, embedded posts, polls, as well as social media login widgets, are not blocked. Links to the website\u2019s social media pages are also not blocked."),(0,n.kt)("h2",{id:"other-filters"},"Other filters"),(0,n.kt)("p",null,"This group contains filters that are not essential for blocking advertisements."),(0,n.kt)("h3",{id:"terminology-3"},"Terminology"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Contextual advertising")," is a type of internet advertising where the advertisement is displayed based on the content, selected audience, location, time, or other context of internet pages."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Search advertising")," is a subclass of contextual advertising where ads are displayed based on the visitor's search query."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Self-promotion of websites")," refers to the banners of a website promoting goods and services owned by the site owner, for which they do not receive compensation from third parties."),(0,n.kt)("p",null,"For more details on these types of advertising, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://adguard.com/kb/general/ad-filtering/search-ads/"},"article on search ads"),"."),(0,n.kt)("h3",{id:"filters-4"},"Filters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Filter unblocking search ads and self-promotion"),(0,n.kt)("li",{parentName:"ul"},"AdGuard DNS filter"),(0,n.kt)("li",{parentName:"ul"},"AdGuard Experimental filter")),(0,n.kt)("h3",{id:"the-purpose-of-these-filters-4"},"The purpose of these filters"),(0,n.kt)("h4",{id:"filter-unblocking-search-ads-and-self-promotion"},"Filter unblocking search ads and self-promotion"),(0,n.kt)("p",null,"This filter unblocks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Contextual advertising in search results when using search engines (such as Google, Bing, Yandex, DuckDuckGo)"),(0,n.kt)("li",{parentName:"ul"},"Self-promotion of websites")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Limitations and exceptions")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Search advertising is unblocked only if it corresponds to the user\u2019s search query, as it is contextual. Otherwise, the advertising remains blocked"),(0,n.kt)("li",{parentName:"ul"},"Self-promotion is unblocked only if it complies with the filter policy. A request for unblocking may be rejected by filter developers"),(0,n.kt)("li",{parentName:"ul"},"Any other advertising will not be unblocked")),(0,n.kt)("h4",{id:"adguard-dns-filter"},"AdGuard DNS filter"),(0,n.kt)("p",null,"This filter is used in AdGuard DNS. It is not a replacement for ad-blocking filters."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Limitations and exceptions")),(0,n.kt)("p",null,"Same as for ad-blocking filters."),(0,n.kt)("h4",{id:"adguard-experimental-filter"},"AdGuard Experimental filter"),(0,n.kt)("p",null,"This filter is intended for testing and debugging rules that potentially may break websites\u2019 functionality. Rules are added by filter developers when there\u2019s a need to test a particular solution. As the filter is designed for debugging purposes, its limitations are minimal."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Limitations and exceptions")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rules should not intentionally break websites\u2019 functionality"),(0,n.kt)("li",{parentName:"ul"},"Rules should not unblock advertisements or otherwise violate the Policy")))}p.isMDXComponent=!0}}]);