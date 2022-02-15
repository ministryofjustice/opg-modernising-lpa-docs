const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");
const markdownItGds = require("./markdown-it-gds");
const dateFilter = require('./src/filters/date-filter.js');
const pluginMermaid = require("@kevingimbel/eleventy-plugin-mermaid");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ 'node_modules/govuk-frontend/govuk/assets': 'assets' })
    eleventyConfig.addPassthroughCopy({ 'src/_includes/css': 'assets' })
    eleventyConfig.addPassthroughCopy({ 'src/_includes/assets': 'assets' })

    eleventyConfig.addPlugin(pluginMermaid);
    eleventyConfig.addPlugin(inclusiveLangPlugin);

    eleventyConfig.addFilter('dateFilter', dateFilter);

    eleventyConfig.setLibrary("md", markdownItGds());

    return {
        dir: { input: 'src', output: '_site', data: '_data' },
        templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true
    }
}
