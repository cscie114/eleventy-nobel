const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  /* The Nobel Prize
     https://www.nobelprize.org/about/developer-zone-2/  */

  let baseUrl = "https://api.nobelprize.org/2.1/laureates";
  let userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0';
  let sort = "asc";

  let prizeParams = {
    sort: sort,
    limit: 1000,
    nobelPrizeYear: 2022,
    yearTo: 2012

  };

  try {
    let params = new URLSearchParams(prizeParams);
    let queryString = params.toString();
    let url = baseUrl + "?" + queryString;
    console.log(url);
    let laureatesData = await EleventyFetch(url, {
      fetchOptions: {
        headers: {
          "User-Agent": userAgent,
        },
      },
      duration: "1d",
      type: "json",
    }).then((jsonData) => {
      return jsonData;
    });
    return(laureatesData);
  } catch (err) {
    console.error("something is wrong");
    console.log(err);
  }
};
