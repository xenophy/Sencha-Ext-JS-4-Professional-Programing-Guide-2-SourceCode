Ext.onReady(function() {

    Ext.define('Population', {
        extend: 'Ext.data.Model',
        fields: ['ward', 'count']
    });

    var store = Ext.create('Ext.data.Store', {
        model: 'Population',
        data: [
            { ward: '千代田区', count: 47 },
            { ward: '中央区', count: 123 },
            { ward: '港区', count: 205 },
            { ward: '新宿区', count: 326 },
            { ward: '文京区', count: 207 },
            { ward: '台東区', count: 176 },
            { ward: '墨田区', count: 248 },
            { ward: '江東区', count: 461 },
            { ward: '品川区', count: 365 },
            { ward: '目黒区', count: 268 },
            { ward: '大田区', count: 693 },
            { ward: '世田谷区', count: 877 },
            { ward: '渋谷区', count: 204 },
            { ward: '中野区', count: 315 },
            { ward: '杉並区', count: 550 },
            { ward: '豊島区', count: 285 },
            { ward: '北区', count: 336 },
            { ward: '荒川区', count: 203 },
            { ward: '板橋区', count: 536 },
            { ward: '練馬区', count: 716 },
            { ward: '足立区', count: 683 },
            { ward: '葛飾区', count: 443 },
            { ward: '江戸川区', count: 679 }
        ]
    });

    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 1200,
        height: 500,
        store: store,
        axes: [{
            type    : 'Category',
            position: 'bottom',
            fields  : ['ward'],
            title   : '特別区部'
        }, {
            type    : 'Numeric',
            position: 'left',
            fields  : ['count'],
            title   : '人口',
            grid    : true
        }],
        series: [{
            type: 'column',
            axis: 'left',
            highlight: true,
            xField: 'ward',
            yField: 'count'
        }]
    });

});
