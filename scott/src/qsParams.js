module.exports.qsParams = {
  google: {
    title: {
      qs: ".section-hero-header-title-title",
    },
    rating: {
      qs: ".section-star-display",
    },
    addr: {
      qs: 'div.section-info > div[data-tooltip = "주소 복사"]',
      attrName: "aria-label",
      rep: [/주소,/, ""],
    },
    addrAlt: {
      qs: 'button[data-item-id*="address"]',
    },
    addrAlt2: {
      qs: '[data-section-id="ad"] .section-info-line',
    },
    ratingCount: {
      qs:
        "span.section-rating-term > span:nth-child(2) > span > button[aria-label]",
      rep: [/\(|\)/g, ""],
    },
    ratingDist: {
      qs: "tr[aria-label]",
      dataType: "array",
      attrName: "aria-label",
      rep: [/성급|리뷰|개/g, ""],
    },
    priceRange: {
      qs:
        "span.section-rating-term-list > span > span > span > span[aria-label]",
      attrName: "aria-label",
    },
    category: {
      qs: "div.gm2-body-2 > span.section-rating-term > span > button",
    },
    website: {
      qs: 'button[data-tooltip="웹사이트 열기"] > div',
    },
    telephone: {
      qs: 'button[data-tooltip="전화번호 복사"] > div',
    },
    similar: {
      qs: ".section-carousel-item-container > button",
      dataType: "array",
      attrName: "aria-label",
    },
    tags: {
      qs: "div.section-editorial-attribute-container > div",
      dataType: "array",
    },
    image: {
      qs: "div.section-hero-header-image-hero-container > button > img",
      attrName: "src",
    },
    description: {
      qs: "div.section-editorial-quote > span",
    },
  },

  kakao: {
    titleSelector: "h1.section-hero-header-title-title",
    title: {
      qs:
        "#mArticle > div.cont_essential > div:nth-child(1) > div.place_details > div > h2",
      // qs: '.inner_place > h2'
    },
    rating: {
      qs:
        "#mArticle > div.cont_essential > div:nth-child(1) > div.place_details > div > div > a:nth-child(3) > span.color_b",
      // qs: 'a.link_evaluation[data-target="comment"] > span.color_b',
      rep: ["점", ""],
    },
    addr: {
      qs:
        "#mArticle > div.cont_essential > div.details_placeinfo > div:nth-child(2) > div > span.txt_address",
      // qs: '.txt_address'
    },
    addr2: {
      qs:
        "#mArticle > div.cont_essential > div.details_placeinfo > div:nth-child(2) > div > span.txt_addrnum",
      rep: [/지번(.)/, "$1"],
    },
    ratingCount: {
      qs:
        "#mArticle > div.cont_essential > div:nth-child(1) > div.place_details > div > div > a:nth-child(3) > span.color_g",
      // qs: 'a.link_evaluation[data-target="comment"] > span.color_g',
      rep: [/\(|\)|명 평가/g, ""],
    },
    blogCount: {
      qs:
        "#mArticle > div.cont_essential > div:nth-child(1) > div.place_details > div > div > a:nth-child(5) > span",
      // qs: 'a.link_evaluation[data-target="review"] > span.color_b',
      rep: ["개", ""],
    },
    category: {
      qs:
        "#mArticle > div.cont_essential > div:nth-child(1) > div.place_details > div > div > span.txt_location",
      rep: ["분류:", ""],
    },
    website: {
      qs:
        "#mArticle > div.cont_essential > div.details_placeinfo > div.placeinfo_default.placeinfo_homepage > div > div.location_present > a.link_homepage",
    },
    openHours: {
      qs: ".openhour_wrap > .fold_floor > div",
      rep: [/(.)닫기/, "$1"],
    },
    telephone: {
      qs:
        "#mArticle > div.cont_essential > div.details_placeinfo > div.placeinfo_default.placeinfo_contact > div > div > span > span.txt_contact",
    },
    facilities: {
      qs:
        "#mArticle > div.cont_essential > div.details_placeinfo > div.placeinfo_default.placeinfo_facility > ul > li > span.color_g",
      dataType: "array",
    },
    menu: {
      qs: "#mArticle > div.cont_menu > ul > li",
      dataType: "array",
    },
    tags: {
      qs: ".link_tag",
      dataType: "array",
    },
    broadcast: {
      qs: ".txt_broadcasting",
      dataType: "array",
    },
    images: {
      qs: "#mArticle > div.cont_photo > div.photo_area > ul > li > a",
      dataType: "array",
      attrName: "style",
      rep: [/background-image:url\('\/\/(.*)'\)/, "$1"],
    },
    description: {
      qs:
        "#mArticle > div.cont_essential > div.details_placeinfo > div.placeinfo_default.open_on > div > p",
    },
    routeSubway: {
      qs: "#mArticle > div.cont_findway > div.station_wayout > ul > li",
      dataType: "array",
    },
    routeBus: {
      qs: "#mArticle > div.cont_findway > div.station_ride.check_list > div",
      dataType: "array",
    },
    routeDetail: {
      qs: "#mArticle > div.cont_findway > div.location_route > p",
    },
    updateDate: {
      qs:
        "#mArticle > div.cont_essential > div.details_placeinfo > span > span.date_revise",
    },
  },

  mangoplate: {
    title: {
      qs: "h1.restaurant_name",
    },
    rating: {
      qs: ".rate-point",
    },
    addr: {
      qs: ".only-desktop > td", 
    },
    addr2: {
      qs: ".Restaurant__InfoAddress--Text",
    },
    ratingCount: {
      qs: "body > main",
      attrName : "data-review_count"
    },
    priceRange: {
      qs: ".info > tbody > tr:nth-child(4) > td",
    },
    category: {
      qs: "section.restaurant-detail > table > tbody > tr:nth-child(3) > td > span",
    },
    website: {
      qs: "section.restaurant-detail > table > tbody > tr:nth-child(7) > td > a",
      attrName: "href"
    },
    telephone: {
      qs: "section.restaurant-detail > table > tbody > tr:nth-child(2) > td",
    },
    images: {
      qs: "div:nth-child(1) > figure > figure > img",
      attrName: "src"
    },
    openHours: {
      qs: "section.restaurant-detail > table > tbody > tr:nth-child(6) > td", 
    },
    facilities: {
      qs: "section.restaurant-detail > table > tbody > tr:nth-child(5) > td", 
    },
    updateDate: {
      qs: "p.update_date",
      rep : [/주소,/, ""],  
    },    

  },


  // TODO: WIP
  naver: {
    titleSelector: "h1.section-hero-header-title-title",
    title: {
      qs: "#_title > span:nth-child(1)", //ok
      // qs: '.inner_place > h2'
    },
    rating: {
      qs: "span._9bFMx > em"
      //"#mArticle > div.cont_essential > div:nth-child(1) > div.place_details > div > div > a:nth-child(3) > span.color_b",
      // qs: 'a.link_evaluation[data-target="comment"] > span.color_b',
      rep: ["점", ""],
    },
    addr: {
      qs:
        "#mArticle > div.cont_essential > div.details_placeinfo > div:nth-child(2) > div > span.txt_address",
      // qs: '.txt_address'
    },
    addr2: {
      qs:
        "#mArticle > div.cont_essential > div.details_placeinfo > div:nth-child(2) > div > span.txt_addrnum",
      rep: [/지번(.)/, "$1"],
    },
    ratingCount: {
      qs:
        "#mArticle > div.cont_essential > div:nth-child(1) > div.place_details > div > div > a:nth-child(3) > span.color_g",
      // qs: 'a.link_evaluation[data-target="comment"] > span.color_g',
      rep: [/\(|\)|명 평가/g, ""],
    },
    blogCount: {
      qs:
        "#mArticle > div.cont_essential > div:nth-child(1) > div.place_details > div > div > a:nth-child(5) > span",
      // qs: 'a.link_evaluation[data-target="review"] > span.color_b',
      rep: ["개", ""],
    },
    category: {
      qs: "#_title > span:nth-child(2)",
    },
    website: {
      qs:
        "#mArticle > div.cont_essential > div.details_placeinfo > div.placeinfo_default.placeinfo_homepage > div > div.location_present > a.link_homepage",
    },
    openHours: {
      qs: ".openhour_wrap > .fold_floor > div",
      rep: [/(.)닫기/, "$1"],
    },
    telephone: {
      qs:
        "#mArticle > div.cont_essential > div.details_placeinfo > div.placeinfo_default.placeinfo_contact > div > div > span > span.txt_contact",
    },
    facilities: {
      qs:
        "#mArticle > div.cont_essential > div.details_placeinfo > div.placeinfo_default.placeinfo_facility > ul > li > span.color_g",
      dataType: "array",
    },
    menu: {
      qs: "#mArticle > div.cont_menu > ul > li",
      dataType: "array",
    },
    tags: {
      qs: ".link_tag",
      dataType: "array",
    },
    broadcast: {
      qs: ".txt_broadcasting",
      dataType: "array",
    },
    images: {
      qs: "#mArticle > div.cont_photo > div.photo_area > ul > li > a",
      dataType: "array",
      attrName: "style",
      rep: [/background-image:url\('\/\/(.*)'\)/, "$1"],
    },
    description: {
      qs:
        "#mArticle > div.cont_essential > div.details_placeinfo > div.placeinfo_default.open_on > div > p",
    },
    routeSubway: {
      qs: "#mArticle > div.cont_findway > div.station_wayout > ul > li",
      dataType: "array",
    },
    routeBus: {
      qs: "#mArticle > div.cont_findway > div.station_ride.check_list > div",
      dataType: "array",
    },
    routeDetail: {
      qs: "#mArticle > div.cont_findway > div.location_route > p",
    },
    updateDate: {
      qs:
        "#mArticle > div.cont_essential > div.details_placeinfo > span > span.date_revise",
    },
  },
};
