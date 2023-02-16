module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/assets/**");

	eleventyConfig.addShortcode("laureateDisplayName", 
	function(laureate) {
		let displayName = '';
		if (("knownName" in laureate)
		     && ("en" in laureate.knownName)) {
			displayName = laureate.knownName.en;
		} else if (("orgName" in laureate)
		     && ("en" in laureate.orgName)) {
			displayName = laureate.orgName.en;
		}
		return displayName;
	});

	return {
    	"dir" : {
        	"input": "src",
        	"output": "dist"
    	}
	};
};
