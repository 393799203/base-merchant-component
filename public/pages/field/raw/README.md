```

	<Field type="raw"
		label="自定义表单："
		name="date"
		onData={ this.getFieldData }
		onValidate={ this.validateField }
		errorMsg="请选择时间" 
		required>
		<Datepicker 
			onChange={ (e) => this.handleDateChange(e) }
			format="yyyy-MM-dd HH:mm:ss"
			value={ this.state.date }
			style={{width: "365px"}}
			showTime/>
	</Field>

```