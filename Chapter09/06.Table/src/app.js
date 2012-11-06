Ext.onReady(function() {

    var tpl = new Ext.XTemplate(
        '<table class="cellulars">',
        '<tr>',
          '<th rowspan="2">&nbsp;</th>',
          '<th colspan="2">商品名</th>',
          '<th rowspan="2">数量</th>',
        '</tr>',
        '<tr>',
          '<th>商品コード</th>',
          '<th>キャリア</th>',
        '</tr>',
        '<tpl for=".">',
        '<tr>',
          '<td class="num" rowspan="2">{#}</td>',
          '<td class="name" colspan="2">{name}</td>',
          '<td class="count" rowspan="2">{count}個</td>',
        '</tr>',
        '<tr>',
          '<td>{code}</td>',
          '<td>{career}</td>',
        '</tr>',
        '</tpl>',
        '</table>'
    );

    var data = [{
        name: 'iPhone 5 64GB + USIM(Black)',
        code: 'CSWAN564B',
        career: 'Softbank',
        count: 2
    }, {
        name: 'iPhone 5 32GB + USIM(Black)',
        code: 'CSWAN532B',
        career: 'Softbank',
        count: 17
    }, {
        name: 'iPhone 5 32GB + USIM(Black)',
        code: 'CAWAN532B',
        career: 'au',
        count: 18
    }, {
        name: 'iPhone 5 16GB + USIM(Black)',
        code: 'CSWAN516B',
        career: 'Softbank',
        count: 3
    }];

    Ext.create('Ext.panel.Panel', {
        title: '携帯電話在庫状況',
        tpl: tpl,
        data: data,
        width: 600,
        renderTo: Ext.getBody()
    });

});
