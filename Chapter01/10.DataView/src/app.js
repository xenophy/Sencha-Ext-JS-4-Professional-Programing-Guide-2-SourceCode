Ext.define('SusiObject', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'price', 'url']
});

Ext.onReady(function() {

    var menuStore = Ext.create('Ext.data.Store', {
        model: 'SusiObject',
        data: [{
            id: 'tamago', name: '玉子', price: 160, url: './resources/images/tamago.png'
        }, {
            id: 'kanpyo', name: 'かんぴょう巻', price: 260, url: './resources/images/kanpyo.png'
        }, {
            id: 'ikura', name: 'いくら', price: 260, url: './resources/images/ikura.png'
        }, {
            id: 'saba', name: 'しめ鯖', price: 160, url: './resources/images/saba.png'
        }, {
            id: 'samon', name: 'とろサーモン', price: 260, url: './resources/images/samon.png'
        }]
    });

    var orderStore = Ext.create('Ext.data.Store', {
        model: 'SusiObject'
    });

    var plugDragSelector = new Ext.ux.DataView.DragSelector();
    var plugDraggable = new Ext.ux.DataView.Draggable();

    plugDraggable.ddConfig = {
        ddGroup: 'sushiDD'
    };
    plugDraggable.ghostTpl = [
        '<tpl for=".">',
            '{name}',
            '<tpl if="xindex % 3 == 0"><br /></tpl>',
            '<tpl if="xindex % 3 != 0">',
                '<tpl if="xindex != xcount">,</tpl>',
            '</tpl>',
        '</tpl>'
    ];

    Ext.widget('panel', {
        title: 'メニュー一覧',
        width: 490,
        height: 395,
        renderTo: 'view',
        layout: 'fit',
        items: [
            Ext.create('Ext.view.View', {
                store: menuStore,
                plugins: [
                    plugDragSelector,
                    plugDraggable
                ],
                tpl: [
                    '<tpl for=".">',
                    '<div class="thumb-wrap" id="{id}">',
                    '<div class="thumb"><img src="{url}" title="{name}"></div>',
                    '<span>{name}</span></div>',
                    '</tpl>',
                    '<div class="x-clear"></div>'
                ],
                autoScroll: true,
                multiSelect: true,
                trackOver: true,
                overItemCls: 'x-item-over',
                itemSelector: 'div.thumb-wrap',
                emptyText: '商品がありません。'
            })
        ]
    });

    Ext.widget('panel', {
        title: '注文一覧',
        width: 490,
        height: 395,
        renderTo: 'view2',
        layout: 'fit',
        items: [
            Ext.create('Ext.view.View', {
                store: orderStore,
                tpl: [
                    '<tpl for=".">',
                    '<div class="thumb-wrap" id="{id}">',
                    '<div class="thumb"><img src="{url}" title="{name}"></div>',
                    '<span>{name}</span></div>',
                    '</tpl>',
                    '<div class="x-clear"></div>'
                ],
                autoScroll: true,
                multiSelect: true,
                trackOver: true,
                overItemCls: 'x-item-over',
                itemSelector: 'div.thumb-wrap',
                emptyText: '商品がありません。',
                listeners: {
                    afterrender: function(view) {
                        view.dropZone = Ext.create('Ext.dd.DropZone', view.getEl(), {
                            ddGroup : 'sushiDD',
                            onContainerDrop: function(source, e, data) {
                                var store = view.getStore(), records, i, len;
                                if (data.copy) {
                                    records = data.records;
                                    data.records = [];
                                    for (i = 0, len = records.length; i < len; i++) {
                                        data.records.push(records[i].copy(records[i].getId()));
                                    }
                                } else {
                                    data.view.store.remove(data.records, data.view === view);
                                }
                                store.insert(store.getCount(), data.records);
                                view.getSelectionModel().select(data.records);
                                Ext.iterate(data.records, function(r) {
                                    menuStore.remove(menuStore.getById(r.internalId));
                                });
                                return true;
                            },
                            onContainerOver : function() {
                                var me = this;
                                return me.dropAllowed;
                            }
                        });

                    }
                }
            })
        ]
    });

});

