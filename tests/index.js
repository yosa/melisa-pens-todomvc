var harness = new Siesta.Harness.Browser.ExtJS();

harness.configure({
    title: 'My Tests'
});

harness.start({
    group: 'Application Tests',
    pageUrl: '../?unittest',
    items: [
        '../tests/test1.js',
        '../tests/test2.js'
    ]
});
