const eleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  /* The Nobel Prize API
     https://www.nobelprize.org/about/developer-zone-2/  */

  let baseUrl = "https://api.nobelprize.org/2.1/nobelPrizes";
  
  try {
    let prizesData = await eleventyFetch(baseUrl, {
      duration: "1d",
      type: "json"
    });
    return(prizesData);
  } catch (err) {
    console.error("Something went wrong :( ");
    console.log(err);
  }
};
