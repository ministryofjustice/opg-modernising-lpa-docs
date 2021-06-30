const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");
const markdownItGds = require("./markdown-it-gds");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ 'node_modules/@ministryofjustice/frontend/assets': 'assets' })
    eleventyConfig.addPassthroughCopy({ 'node_modules/govuk-frontend/govuk/*.js': 'assets/javascript' })
    eleventyConfig.addPassthroughCopy({ 'node_modules/govuk-frontend/govuk/assets': 'assets' })
    eleventyConfig.addPassthroughCopy({ 'src/_includes/css': 'assets' })
    eleventyConfig.addPassthroughCopy({ 'src/_includes/assets': 'assets' })

    eleventyConfig.addPlugin(inclusiveLangPlugin);

    eleventyConfig.setLibrary("md", markdownItGds());

    eleventyConfig.addFilter(
        "addActiveAttribute",
        function (config, filePathStem) {
            if (config.items) {
                return {
                    ...config,
                    items: config.items.map((item) => ({
                        ...item,
                        active: filePathStem.indexOf(item.href) > -1,
                    })),
                };
            } else if (config.sections) {
                return {
                    ...config,
                    sections: config.sections.map((section) => ({
                        ...section,
                        items: section.items.map((item) => ({
                            ...item,
                            active: filePathStem.indexOf(item.href) > -1,
                        })),
                    })),
                };
            }
        }
    );

    return {
        dir: { input: 'src', output: '_site', data: '_data' },
        templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true
    }
}
