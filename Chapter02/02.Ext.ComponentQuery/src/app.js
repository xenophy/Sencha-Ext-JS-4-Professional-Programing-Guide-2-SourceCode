Ext.onReady(function() {

    var p = Ext.widget('panel', {
        id: 'myPanel',
        width: 500,
        height: 300,
        border: false,
        renderTo: Ext.getBody(),
        layout: 'border',
        items: [{
            id: 'MY_NORTH',
            region: 'north',
            title: 'NorthPanel',
            height: 50
        }, {
            region: 'center',
            title: 'CenterPanel'
        }]
    });

    // ドキュメント内に存在する全てのExt.Panelを配列で取得します。
    var panelsArray = Ext.ComponentQuery.query('panel');

    // pコンテナーの最初のパネルを取得します。
    // 階層は関係ありません。
    p.down('panel');

    // pコンテナー直下の最初のパネルを取得します。
    p.child('panel');

    // north,centerの2つのパネルを取得します。
    // pコンテナー以下で検索されます。
    p.query('panel');

    // myPanelを取得します。
    // MY_NORTHから見て上のコンポーネントでxtypeがpanelの物を探します。
    Ext.getCmp('MY_NORTH').up('panel');

});
