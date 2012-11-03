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
            fieldLabel: 'TextField3'
        }, {
            xtype: 'textarea',
            fieldLabel: 'TextArea1',
            disabled: true
        }],
        buttons: [{
            text: '実行',
            handler: function() {
                var items = p.query('{isDisabled()}');
                Ext.iterate(items, function(item, i) {
                    item.enable();
                });
            }
        }]
    });

});
