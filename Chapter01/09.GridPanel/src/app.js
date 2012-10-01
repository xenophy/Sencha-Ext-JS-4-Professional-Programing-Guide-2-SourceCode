Ext.define('Ext.ux.grid.plugin.DragDrop', {
    extend: 'Ext.grid.plugin.DragDrop',
    alias: 'plugin.ux.gridviewdragdrop',
    onViewRender : function(view) {
        var me = this;
        if (me.enableDrag) {
            me.dragZone = Ext.create('Ext.view.DragZone', {
                view: view,
                ddGroup: me.dragGroup || me.ddGroup,
                dragText: me.dragText
            });
        }
        if (me.enableDrop) {
            me.dropZone = Ext.create('Ext.grid.ViewDropZone', {
                view: view,
                ddGroup: me.dropGroup || me.ddGroup,
                onContainerOver : function(dd, e, data) {
                    var me = this,
                        view = me.view,
                        count = view.store.getCount(),
                        limit;
                    Ext.iterate(data.records, function(r) {
                        if(r.data.name === '納豆巻き') {
                            limit = true;
                        }
                    });
                    if(limit) {
                        return me.dropNotAllowed;
                    }
                    if (count) {
                        me.positionIndicator(view.getNode(count - 1), data, e);
                    } else {
                        delete me.overRecord;
                        delete me.currentPosition;
                        me.getIndicator().setWidth(Ext.fly(view.el).getWidth()).showAt(0, 0);
                        me.valid = true;
                    }
                    return me.dropAllowed;
                }
            });
        }
    }
});

Ext.define('SusiObject', {
    extend: 'Ext.data.Model',
    fields: ['name', 'price']
});

Ext.onReady(function() {

    var columns = [{
        text: "商品名", flex: 1, sortable: true, dataIndex: 'name'
    }, {
        text: "価格", flex: 1, sortable: true, dataIndex: 'price'
    }];

    var menuGridStore = Ext.create('Ext.data.Store', {
        model: 'SusiObject',
        data: [{
            name: 'まぐろ', price: 160
        }, {
            name: 'ねぎとろ巻', price: 260
        }, {
            name: 'いくら', price: 260
        }, {
            name: '甘エビ', price: 160
        }, {
            name: 'とろサーモン', price: 260
        }, {
            name: '納豆巻き', price: 130
        }, {
            name: 'ホッキ貝', price: 130
        }, {
            name: 'いか', price: 130
        }]
    });

    var orderGridStore = Ext.create('Ext.data.Store', {
        model: 'SusiObject'
    });

    var menuGrid = Ext.create('Ext.grid.Panel', {
        multiSelect: true,
        viewConfig: {
            plugins: {
                ptype: 'ux.gridviewdragdrop'
            }
        },
        store: menuGridStore,
        columns: columns,
        title: 'メニュー一覧',
        width: 300,
        height: 400,
        renderTo: 'grid'
    });

    var orderGrid = Ext.create('Ext.grid.Panel', {
        multiSelect: false,
        viewConfig: {
            plugins: {
                ptype: 'ux.gridviewdragdrop'
            }
            /*
            plugins: {
                ptype: 'gridviewdragdrop'
            },
            listeners: {
                drop: function(node, data, dropRec, dropPosition) {
                    Ext.iterate(data.records, function(r) {
                        if(r.data.name === '納豆巻き') {
                            alert('納豆巻きは、食べられません。\n元に戻してください。');
                        }
                    });
                }
            }
            */
        },
        store: orderGridStore,
        columns: columns,
        title: '注文一覧',
        width: 300,
        height: 400,
        renderTo: 'grid2'
    });

});

