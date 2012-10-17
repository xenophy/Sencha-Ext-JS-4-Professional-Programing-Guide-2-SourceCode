Ext.ns('Ext.app');
Ext.app.REMOTING_API = {
    "url": "./router.php",
    "type": "remoting",
    "actions": {
        "MyAction": [{
            "name": "getGrid",
            "len": 1
        }]
    }
};
Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);

Ext.onReady(function() {

    Ext.define('Company', {
        extend: 'Ext.data.Model',
        fields: ['name', 'employees']
    });

    Ext.widget('gridpanel', {
        title:  'GridPanel with Ext Direct',
        width:  300,
        height: 500,
        renderTo: Ext.getBody(),
        store: {
            model: 'Company',
            remoteSort: true,
            autoLoad: true,
            sorters: [{
                property: 'name',
                direction: 'ASC'
            }],
            proxy: {
                type: 'direct',
                directFn: MyAction.getGrid
            }
        },
        columns: [{
            dataIndex: 'name',
            flex: 1,
            text: 'Name'
        }, {
            dataIndex: 'employees',
            align: 'right',
            width: 120,
            text: '従業員数'
        }]
    });

});
