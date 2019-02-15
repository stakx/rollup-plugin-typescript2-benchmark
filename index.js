
async function bundle() {
    const rollup = require('rollup');
    const typescript = require('rollup-plugin-typescript2');

    const bundle = await rollup.rollup({
        input: 'src/main.ts',
        plugins: [typescript({ clean: false })]
    });
    await bundle.write({
        file: 'dist/main.js',
        format: 'iife',
        name: 'main'
    });
}

const rimraf = require('rimraf');
rimraf.sync('.rpt2_cache');

bundle().then(function() {
    const hrstart = process.hrtime();
    bundle().then(function() {
        const hrend = process.hrtime(hrstart);
        console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
    });
});
