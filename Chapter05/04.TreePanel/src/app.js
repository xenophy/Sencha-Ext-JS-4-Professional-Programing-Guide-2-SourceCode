Ext.ns('Ext.app');
Ext.app.REMOTING_API = {
    "url": "./router.php",
    "type": "remoting",
    "actions": {
        "MyAction": [{
            "name": "getNode",
            "len": 1
        }]
    }
};
Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);

Ext.onReady(function() {

    Ext.widget('treepanel', {
        title:  'TreePanel with Ext Direct',
        width:  300,
        height: 500,
        renderTo: Ext.getBody(),
        store: {
            root: {
                expanded: true
            },
            proxy: {
                type: 'direct',
                directFn: MyAction.getNode,
                paramOrder: ['id']
            }
        }
    });

});
