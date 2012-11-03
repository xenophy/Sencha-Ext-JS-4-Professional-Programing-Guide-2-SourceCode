Ext.onReady(function() {

    var p = Ext.widget('form', {
        title: 'Fields',
        bodyPadding: 10,
        width: 500,
        renderTo: Ext.getBody(),
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        items: [{
            fieldLabel: 'TextField1'
        }, {
            fieldLabel: 'TextField2',
            disabled: true
        }, {
            fieldLabel: 'TextField3',
            disabled: true
        }, {
            xtype: 'textarea',
            fieldLabel: 'TextArea1'
        }],
        buttons: [{
            text: '実行',
            handler: function() {
                var ret = p.query('textfield:not([disabled])');
                Ext.iterate(ret, function(item, i) {
                    item.getEl().frame("green");
                });
            }
        }]
    });

});
