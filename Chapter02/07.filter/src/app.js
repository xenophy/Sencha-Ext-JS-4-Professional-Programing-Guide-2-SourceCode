Ext.ComponentQuery.pseudos.ext4versions = function(items) {
    var result = [];
    Ext.iterate(items, function(item) {
        if(item.getValue().match(/Ext JS 4\.[0-9]/)) {
            result.push(item);
        }
    });
    return result;
};

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
            fieldLabel: 'TextField1',
            value: 'Ext JS 3.4'
        }, {
            fieldLabel: 'TextField2',
            value: 'Ext JS 4.0'
        }, {
            fieldLabel: 'TextField3',
            value: 'Ext JS 4.1'
        }, {
            xtype: 'textarea',
            fieldLabel: 'TextArea1'
        }],
        buttons: [{
            text: '実行',
            handler: function() {
                var ret = p.query('textfield:ext4versions');
                Ext.iterate(ret, function(item, i) {
                    item.getEl().frame("green");
                });
            }
        }]
    });

});
