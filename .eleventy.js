module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "public": "/" });

  eleventyConfig.addFilter("isoDate", (date) => {
    return new Date(date).toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("readableDate", (date) => {
    return new Date(date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
  });

  // Only include .md files in the writing collection (excludes index.njk)
  eleventyConfig.addCollection("writing", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/writing/*.md")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
