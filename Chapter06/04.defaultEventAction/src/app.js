Ext.onReady(function() {

    var viewport = Ext.widget('viewport', {
        layout: {
            type: 'border',
            padding: 5
        },
        items: [{
            title: 'north',
            region: 'north',
            height: 100,
            padding: '0 0 5 0',
            collapsible: true
        }, {
            title: 'west',
            region: 'west',
            width: 150,
            padding: '0 5 0 0',
            collapsible: true
        }, {
            title: 'east',
            region: 'east',
            width: 150,
            padding: '0 0 0 5',
            collapsible: true
        }, {
            title: 'center',
            region: 'center'
        }, {
            title: 'south',
            region: 'south',
            height: 100,
            padding: '5 0 0 0',
            collapsible: true
        }]
    });

    Ext.FocusManager.enable();

    var map = Ext.create('Ext.util.KeyMap', Ext.getBody(), [{
        key: Ext.EventObject.E,
        ctrl: true,
        defaultEventAction: 'stopEvent',
        fn: function() {
            viewport.down('panel[title="east"]').toggleCollapse();
        }
    },{
        key: Ext.EventObject.W,
        ctrl: true,
        defaultEventAction: 'stopEvent',
        fn: function() {
            viewport.down('panel[title="west"]').toggleCollapse();
        }
    },{
        key: Ext.EventObject.N,
        ctrl: true,
        defaultEventAction: 'stopEvent',
        fn: function() {
            viewport.down('panel[title="north"]').toggleCollapse();
        }
    },{
        key: Ext.EventObject.S,
        ctrl: true,
        defaultEventAction: 'stopEvent',
        fn: function() {
            viewport.down('panel[title="south"]').toggleCollapse();
        }
    }]);

});
