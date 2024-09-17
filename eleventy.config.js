module.exports = function (eleventyConfig) 
{
  eleventyConfig.addWatchTarget("./src/scss/");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};
