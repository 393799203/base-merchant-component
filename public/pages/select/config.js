const config = {
	selectData1: [
        {
            text: '1选项1',
            value: '0',
        },{
            text: '2选项2',
            value: '1',
        },{
            text: '3选项3',
            value: '2',
        }
    ],
    selectData2: [
        [{
            text: '4选项1',
            value: '0'
        }, {
            text: '5选项2',
            value: '1'
        }, {
            text: '6选项3',
            value: '2'
        }],
        [{
            text: '7选项4',
            value: '3'
        }, {
            text: '8选项5',
            value: '4'
        }]
    ],
    selectData3: [
        {
            text: '9选项1',
            value: '0'
        },{
            text: '10选项2',
            value: '1',
            options: [{
                text: '11子选项1',
                value: '11'
            },{
                text: '12子选项2',
                value: '12'
            }]
        },{
            text: '13选项3',
            value: '2',
            options: [{
                text: '14子选项3',
                value: '21'
            },{
                text: '15子选项4',
                value: '22'
            }]
        }
    ],
};

export default config;