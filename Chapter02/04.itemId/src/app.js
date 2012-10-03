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
            itemId: 'field1',
            fieldLabel: 'TextField1'
        }, {
            itemId: 'field2',
            fieldLabel: 'TextField2'
        }, {
            itemId: 'field3',
            fieldLabel: 'TextField3'
        }, {
            itemId: 'field4',
            xtype: 'textarea',
            fieldLabel: 'TextArea1'
        }],
        buttons: [{
            text: '実行',
            handler: function() {
                p.child('#field3').setValue('id = "field3"');
            }
        }]
    });

});
