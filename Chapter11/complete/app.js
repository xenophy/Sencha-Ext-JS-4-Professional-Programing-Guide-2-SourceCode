Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    views: [
        'Viewport'
    ],
    autoCreateViewport: true,
    name: 'MyApp'
});
