module.exports = function(eleventyConfig) {
  // Statische Ordner durchreichen
  eleventyConfig.addPassthroughCopy("wp-content");
  eleventyConfig.addPassthroughCopy("wp-includes");

  return {
    dir: {
      input: ".", // Root als Quelle
      output: "_site"
    }
  };
};
