const eleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  /* The Nobel Prize
     https://www.nobelprize.org/about/developer-zone-2/  */

  let baseUrl = "https://api.nobelprize.org/2.1/nobelPrizes";
  let userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0';

  try {
    console.log(baseUrl);
    let prizesData = await eleventyFetch(baseUrl, {
      fetchOptions: {
        headers: {
          "User-Agent": userAgent
        }
      },
      duration: "1d",
      type: "json",
    });
    return(prizesData);
  } catch (err) {
    console.error("something is wrong");
    console.log(err);
  }
};
