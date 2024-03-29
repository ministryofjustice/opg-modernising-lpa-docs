const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language');
const markdownItGds = require('./markdown-it-gds');
const dateFilter = require('./src/filters/date-filter.js');
const date24HourFilter = require('./src/filters/date24Hours-filter.js');
//const pluginTOC = require('eleventy-plugin-toc');
const pluginTOC = require('./extensions/eleventy-plugin-toc/.eleventy.js');
const pluginRss = require('@11ty/eleventy-plugin-rss');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ 'node_modules/govuk-frontend/govuk/assets': 'assets' });
    eleventyConfig.addPassthroughCopy({ 'src/_includes/css': 'assets' });
    eleventyConfig.addPassthroughCopy({ 'src/_includes/assets': 'assets' });
    eleventyConfig.addPassthroughCopy({ 'src/_includes/scripts': 'assets' });
    eleventyConfig.addPassthroughCopy({ 'src/_includes/budget.json': 'budget.json' });

    eleventyConfig.addPlugin(inclusiveLangPlugin);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginTOC, {
        wrapper: 'div',
        wrapperClass: 'govuk-list govuk-list--bullet',
        ul: true,
        anchorClass: 'govuk-link',
    });

    eleventyConfig.addFilter('log', value => {
        console.log(value);
    })

    eleventyConfig.addFilter('limit', function (array, limit) {
        return array.slice(0, limit);
    });

    eleventyConfig.addFilter('dateFilter', dateFilter);
    eleventyConfig.addFilter('date24HourFilter', date24HourFilter);

    eleventyConfig.setLibrary('md', markdownItGds());

    return {
        dir: { input: 'src', output: '_site', data: '_data' },
        templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true
    }
}
