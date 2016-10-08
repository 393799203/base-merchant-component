```

	<Field type="radio"
        name="radio"
        form="FieldName"
        defaultValue={2}
        options={radioOptions}
        label="radio:">
    </Field>

    var radioOptions = [
		{
			label:'单选1',    //选项文案
			value: 0         //选项的值
		},
		{
			label: '单选2',    
			value: 1,
			defaultChecked:true
		},{
			label: '单选3',
			value: 2
		}
	]

```