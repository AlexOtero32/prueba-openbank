import tailwindcss from 'tailwindcss';

export default {
    plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
};