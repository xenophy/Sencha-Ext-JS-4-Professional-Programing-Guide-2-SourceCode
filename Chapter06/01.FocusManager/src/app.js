Ext.onReady(function() {

    var form = Ext.widget('form', {
        title:'Ext.FocusManager Sample',
        width: 500,
        renderTo: Ext.getBody(),
        bodyPadding: 20,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'テキスト1'
        }, {
            xtype: 'radio',
            name: 'rdo1',
            fieldLabel: 'ラジオ1'
        }, {
            xtype: 'radio',
            name: 'rdo1',
            fieldLabel: 'ラジオ2'
        }],
        buttons: [{
            text: 'ボタン1'
        }, {
            text: 'ボタン2'
        }]
    });

    //Ext.FocusManager.enable({focusFrame: true});
    Ext.FocusManager.enable(true);

});
