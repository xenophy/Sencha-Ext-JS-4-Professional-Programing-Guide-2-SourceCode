
Ext.define('Ext.ux.tree.plugin.TreeViewDragDrop', {
    extend: 'Ext.tree.plugin.TreeViewDragDrop',
    alias: 'plugin.ux.treeviewdragdrop',
    onViewRender : function(view) {
        var me = this;
        if (me.enableDrag) {
            me.dragZone = Ext.create('Ext.tree.ViewDragZone', {
                view: view,
                ddGroup: me.dragGroup || me.ddGroup,
                dragText: me.dragText,
                repairHighlightColor: me.nodeHighlightColor,
                repairHighlight: me.nodeHighlightOnRepair
            });
        }
        if (me.enableDrop) {
            me.dropZone = Ext.create('Ext.tree.ViewDropZone', {
                view: view,
                ddGroup: me.dropGroup || me.ddGroup,
                allowContainerDrops: me.allowContainerDrops,
                appendOnly: me.appendOnly,
                allowParentInserts: me.allowParentInserts,
                expandDelay: me.expandDelay,
                dropHighlightColor: me.nodeHighlightColor,
                dropHighlight: me.nodeHighlightOnDrop,
                onNodeOver : function(node, dragZone, e, data) {
                    var position = this.getPosition(e, node),
                        returnCls = this.dropNotAllowed,
                        view = this.view,
                        targetNode = view.getRecord(node),
                        targetGroup = (targetNode.raw ? targetNode.raw.group : null),
                        nodeType = data.records[0].raw.type,
                        indicator = this.getIndicator(),
                        indicatorX = 0,
                        indicatorY = 0;
                    this.cancelExpand();
                    if(nodeType !== targetGroup) {
                        return returnCls;
                    }
                    if(position == 'append' && !this.expandProcId && !Ext.Array.contains(data.records, targetNode) && !targetNode.isLeaf() && !targetNode.isExpanded()) {
                        this.queueExpand(targetNode);
                    }
                    if (this.isValidDropPoint(node, position, dragZone, e, data)) {
                        this.valid = true;
                        this.currentPosition = position;
                        this.overRecord = targetNode;
                        indicator.setWidth(Ext.fly(node).getWidth());
                        indicatorY = Ext.fly(node).getY() - Ext.fly(view.el).getY() - 1;
                        if (position == 'before') {
                            returnCls = targetNode.isFirst() ? Ext.baseCSSPrefix + 'tree-drop-ok-above' : Ext.baseCSSPrefix + 'tree-drop-ok-between';
                            indicator.showAt(0, indicatorY);
                            dragZone.proxy.show();
                        } else if (position == 'after') {
                            returnCls = targetNode.isLast() ? Ext.baseCSSPrefix + 'tree-drop-ok-below' : Ext.baseCSSPrefix + 'tree-drop-ok-between';
                            indicatorY += Ext.fly(node).getHeight();
                            indicator.showAt(0, indicatorY);
                            dragZone.proxy.show();
                        } else {
                            returnCls = Ext.baseCSSPrefix + 'tree-drop-ok-append';
                            indicator.hide();
                        }
                    } else {
                        this.valid = false;
                    }
                    this.currentCls = returnCls;
                    return returnCls;
                }
            });
        }
    }
});

Ext.onReady(function() {

    var store = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            text: "寿司一覧",
            children: [{
                text: "まぐろ", type: 'nigiri', leaf: true
            }, {
                text: "サーモン", type: 'nigiri', leaf: true
            }, {
                text: "びんとろ", type: 'nigiri', leaf: true
            }, {
                text: "かつおたたき", type: 'nigiri', leaf: true
            }, {
                text: "生たこ", type: 'nigiri', leaf: true
            }, {
                text: "とろサーモン", type: 'nigiri', leaf: true
            }, {
                text: "焼サーモン", type: 'nigiri', leaf: true
            }, {
                text: "ほたて貝", type: 'nigiri', leaf: true
            }, {
                text: "コーン", type: 'gunkan', leaf: true
            }, {
                text: "ねぎとろ", type: 'gunkan', leaf: true
            }, {
                text: "いくら", type: 'gunkan', leaf: true
            }, {
                text: "うに", type: 'gunkan', leaf: true
            }]
        }
    });

    var tree = Ext.create('Ext.tree.Panel', {
        store: store,
        viewConfig: {
            plugins: {
                ptype: 'ux.treeviewdragdrop',
                appendOnly: true
            }
        },
        title: 'Ext.dd Packages',
        height: 500,
        width: 250,
        useArrows: true,
        renderTo: 'tree'
    });

    var store2 = Ext.create('Ext.data.TreeStore', {
        root: {
            expanded: true,
            text: "カテゴリ",
            expanded: true,
            children: [{
                text: 'にぎり', group: 'nigiri', children: []
            }, {
                text: '軍艦', group: 'gunkan', children: []
            }]
        }
    });

    var tree2 = Ext.create('Ext.tree.Panel', {
        store: store2,
        viewConfig: {
            plugins: {
                ptype: 'ux.treeviewdragdrop',
                appendOnly: true
            }
        },
        title: 'Ext.dd Drops',
        height: 500,
        width: 250,
        useArrows: true,
        renderTo: 'tree2'
    });

});
