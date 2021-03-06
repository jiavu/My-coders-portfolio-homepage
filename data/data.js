const data = {
  projects: {
    websites: [
      {
        title: "Browser Startpage v.1",
        short_title: "start page",
        published: "May 2019",
        description: "First version of a browser start page, displaying current weather and forecast.",
        link: "https://jiavu.de/weather",
        repo: "https://github.com/jiavu/browser-start-page",
        tags: ["ReactJS", "JavaScript", "CSS", "HTML5"],
        preview_img: "./img/preview_browserStartPageV1.PNG",
        preview_icon: "./img/lightClouds.svg",
        font_family: "'Josefin Sans', sans-serif",
        preview_color: "hsl(0, 0%, 93%)",
        preview_bg_color: "hsl(0, 0%, 18%)"
      },
      {
        title: "Galgenraten",
        short_title: "Galgen_aten",
        published: "April 2019",
        description: "A server-based 2-player word guessing game. Language: German",
        link: null,
        repo: "https://github.com/jiavu/Galgenraten",
        tags: ["NodeJS", "Express", "Websocket.io", "JavaScript", "CSS", "HTML5"],
        preview_img: "./img/preview_Galgenraten.PNG",
        preview_icon: null,
        font_family: "'Balthazar', serif",
        preview_color: "hsl(0, 0%, 95%)",
        preview_bg_color: "rgb(90, 68, 57)"
      },
      {
        title: "eCommerce Website Template",
        short_title: "eCommerce template",
        published: "ongoing",
        description: "A template for an eCommerce website.",
        link: null,
        repo: "https://github.com/jiavu/ecommerce-website_template",
        tags: ["JavaScript", "ReactJS", "CSS", "HTML5"],
        preview_img: "./img/preview_eCommerceTemplate2.png",
        preview_icon: "./img/preview_icon_eComTempl.png",
        font_family: "sans-serif",
        preview_color: "#444",
        preview_bg_color: "#add8e6"
      },
      {
        title: "My Portfolio",
        short_title: "My Portfolio",
        published: "January 2019",
        description: "This website.",
        link: null,
        repo: "https://github.com/jiavu/My-coders-portfolio-homepage",
        tags: ["JavaScript", "AngularJS", "jQuery", "CSS", "HTML5", "Responsive Design", "PHP"],
        preview_img: "./img/preview_portfolio_3.PNG",
        preview_icon: null,
        font_family: null,
        preview_color: null,
        preview_bg_color: null
      },
      {
        title: "My Furball",
        short_title: "My Furball",
        published: "December 2018",
        description: "A Tamagotchi-like fast-play browser game.",
        link: "https://jiavu.de/furball",
        repo: "https://github.com/jiavu/Furbal",
        tags: ["JavaScript", "jQuery", "GSAP", "CSS", "HTML5", "Responsive Design", "Progressive Web App"],
        preview_img: "./img/preview_furbal.png",
        preview_icon: null,
        font_family: "'Coiny', cursive",
        preview_color: "black",
        preview_bg_color: "hsl(0, 0%, 95%)"
      },
      {
        title: "Awesome website (test tile)",
        short_title: "Awesome website",
        published: "January 2055",
        description: "The awesomest thing you've ever seen. It makes your life awesome.",
        link: "https://www.awesome.iam",
        repo: null,
        tags: ["JavaScript", "jQuery", "AngularJS"],
        preview_img: "./img/Bg_FrblCode_long.PNG",
        preview_icon: "./img/test_icon.svg",
        font_family: null,
        preview_color: "rgb(47, 47, 158)",
        preview_bg_color: "hsl(46, 70%, 54%)"
      },
      {
        title: "Google Fonts Comparison",
        short_title: "Google Fonts Comparison",
        published: "August 2018",
        description: "For comparing fonts of custom Google Fonts stylesheets.",
        link: "https://jiavu.de/GFonts-comparison/",
        repo: "https://github.com/jiavu/Google-Fonts-comparison",
        tags: ["JavaScript", "HTML5", "CSS"],
        preview_img: "./img/preview_GFontsComparison.png",
        preview_icon: null,
        font_family: "Arial, Helvetica, sans-serif",
        preview_color: "whitesmoke",   // or tomato
        preview_bg_color: "rgb(40, 40, 40)"
      },
      {
        title: "Visual Metronome",
        short_title: "Visual Metronome",
        published: "ongoing",
        description: "Web page with a linear-gradient background pulsating in a definable bpm tempo.",
        link: null,
        repo: "https://github.com/jiavu/linear-gradient-metronome",
        tags: ["JavaScript", "AngularJS", "GSAP", "CSS", "HTML5"],
        preview_img: "./img/preview_visualMetronome2.png",
        preview_icon: null,
        font_family: "'Comic Sans MS', sans-serif",
        preview_color: "blue",
        preview_bg_color: "black"
      }
    ],
    other: [
      {
        title: "Google Chrome Extension + Zendesk Inlineframe App",
        short_title: "Helpdesk Tool",
        published: "August 2018, January 2019",
        description: "Linking between helpdesk software and helpcenter knowledge base.<br>\
                      <ul>\
                          <li>Opening Helpcenter in a new tab appending a search query string.</li>\
                          <li>Copying and formatting the document-link, closing the helpcenter browser tab.</li>\
                      </ul>",
        link: null,
        repo: "https://github.com/jiavu/Zendesk-HC-App",
        tags: ["JavaScript", "HTML5", "CSS", "json"],
        preview_img: "./img/preview_HCTool.PNG",
        preview_icon: "./img/MagineTV.png",
        font_family: "'Proxima Nova Condensed',Helvetica,Arial,serif",
        // helpcenter: 'Lucida Grande', 'Lucida Sans', 'Lucida Sans Unicode', sans-serif;
        preview_color: "#e83f54",
        preview_bg_color: "#fff"
      },
      {
        title: "Infobox v1.5.5 - WeatherApp",
        short_title: "WeatherApp",
        published: "June 2018",
        description: "Weather GUI displaying time, current weather, 3 and 6 hourly forecast, daytime forecast for next days.<br>\
                      Multilingual support, timezone support.<br>\
                      Written in Python 3.6, successfully tested on Windows and on a RaspberryPi.",
        link: null,
        repo: "https://github.com/jiavu/Infobox---WeatherApp",
        tags: ["Python 3", "Tkinter", "pytz", "timezonefinder", "Pillow", "api"],
        preview_img: "./img/preview_weatherapp2.PNG",
        preview_icon: null,
        font_family: "Carlito, sans-serif",
        preview_color: "turquoise",
        preview_bg_color: "hsl(0, 0%, 12%)"    //grey12
      }
    ],
  },
  devTools: ["JavaScript", "HTML5", "CSS3", "Responsive Design", "jQuery", "GreenSock Animation Platform(GSAP)", "ReactJS", "AngularJS", "Progessive Web App", "Python 2/3", "git", "json", "NodeJS"]
};