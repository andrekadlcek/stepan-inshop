const purgecss = require("@fullhuman/postcss-purgecss")({
    // Specify the paths to all of the template files in your project
    content: ['./src/**/*.html', './src/**/*.js', './src/**/*.svelte'],
    // This is the function used to extract class names from your templates
    defaultExtractor: (content) => {
        // Capture as liberally as possible, including things like `h-(screen-1.5)`
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

        // Capture classes within other delimiters like .block(class="w-1/2") in Pug
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

        return broadMatches.concat(innerMatches);
    },
});

const tailwindcss = require('tailwindcss');


module.exports = {
    plugins: [
        require('postcss-import'),
        tailwindcss('./tailwind.config.js'),
        require('postcss-nested'),
        require('autoprefixer'),
        require('postcss-custom-media'),
        ...(process.env.ENV_BUILD === "prod" ? [purgecss] : []),
        ...(process.env.ENV_BUILD === "prod" ? [require("cssnano")()] : []),
    ],
};