const Api = require("./index");

(async () => {
  const event = {
    queryStringParameters: { inputUrl: "https://place.map.kakao.com/8460978" },
  };
  Api.getInfo(event);
})();
