module.exports = function(eleventyConfig) {
  // Statische Ordner durchreichen
  eleventyConfig.addPassthroughCopy("wp-content");
  eleventyConfig.addPassthroughCopy("wp-includes");

  return {
    dir: {
      input: ".", // Root als Quelle
      output: "docs" // WICHTIG: docs für GitHub Pages
    },
    pathPrefix: "/witt-logopaedie.de/"
  };
};
