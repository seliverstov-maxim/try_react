/** @jsx React.DOM */

$(function() {
	var tasklist = React.createClass({
		getInitialState: function() {
			return {
				items: [
					{id: 0, text: 'Some task', is_enable: false},
					{id: 1, text: 'Some task', is_enable: true},
					{id: 2, text: 'Some task', is_enable: false},
				],
				count: 0,
				text: ''
			};
		},

		changeHandler: function(e) {
			this.setState({
				text: e.target.value
			})
		},

		submitHandler: function(e) {
			e.preventDefault();
			newItem = {id: this.state.count, text: this.state.text, is_enable: false};
			newCount = this.state.count + 1;
			newItems = this.state.items.concat(newItem);
			this.setState({
				items: newItems,
				count: newCount,
				text: ''
			});
		},

		removeHandler: function(obj) {
			items = this.state.items;
			_.remove(items, {id: obj.id});
			this.setState({
				items: items
			})
		},

		editHandler: function(obj) {
			items = this.state.items;
			index = _.findIndex(items, {id: obj.id});
			item = items[index];
			item.is_enable = true;
			items[index] = item;
			this.setState({
				items: items
			})
		},

		updateHandler: function(obj) {
			items = this.state.items;
			index = _.findIndex(items, {id: obj.id});
			item = items[index];
			item.is_enable = false;
			items[index] = item;
			this.setState({
				items: items
			})
		},

		itemChangeHandler: function(obj, e) {
			items = this.state.items;
			index = _.findIndex(items, {id: obj.id});
			item = items[index];
			item.text = e.target.value
			items[index] = item;
			this.setState({
				items: items
			})
		},

		head: function() {
			return (
				<div className="head panel panel-primary">
					<div className="panel-heading">
						<h1 className="lead">TODO LIST</h1>
					</div>
				</div>
			);
		},

		form: function() {
			return (
				<div className="panel-body">
					<form className="form-inline" role="form">
						<div className="col-sm-9">
							<input className="form-control" onChange={this.changeHandler} value={this.state.text} type="text" placeholder="Enter task" />
						</div>
						<button className="btn btn-primary pull-right" onClick={this.submitHandler}>Create</button>
					</form>
				</div>
			);
		},

		list: function(items) {
			return (
				<div className="panel-body">
					<ul className="list-unstyled">
						{this.state.items.map(
							function(item){
								if (item.is_enable) {
									return (
										<li className="panel lead clearfix">
											{this.enable_item(item)}
										</li>
									)
								} else {
									return (
										<li className="panel lead clearfix">
											{this.disable_item(item)}
										</li>
									)
								}
							}, this)}
					</ul>
				</div>
			);
		},

		enable_item: function(item) {
			return (
				<div className="form-inline">
					<div className="col-sm-9">
						<input type="text" className="form-control" onChange={this.itemChangeHandler.bind(this, item)} value={item.text} />
					</div>
					<div className="btn-group pull-right">
						{this.button_ok(item)}
						{this.button_remove(item)}
					</div>
				</div>
			);
		},

		disable_item: function(item) {
			return (
				<div>
					<span className="col-sm-8">{item.text}</span>
					<div className="btn-group pull-right">
						{this.button_pencil(item)}
						{this.button_remove(item)}
					</div>
				</div>
				);
		},

		button_pencil: function(item) {
			return (
				<button type="button" className="btn btn-primary btn-sm" onClick={this.editHandler.bind(this, item)}>
					<span className="glyphicon glyphicon-pencil"></span>
				</button>
			);
		},

		button_remove: function(item) {
			return (
				<button type="button" className="btn btn-warning btn-sm" onClick={this.removeHandler.bind(this, item)}>
					<span className="glyphicon glyphicon-remove"></span>
				</button>
			);
		},

		button_ok: function(item) {
			return (
				<button type="button" className="btn btn-primary btn-sm" onClick={this.updateHandler.bind(this, item)}>
					<span className="glyphicon glyphicon-ok"></span>
				</button>
			);
		},

		render: function() {
			return (
				<div id="task-list">
					{this.head()}
					{this.form()}
					{this.list(this.props.items)}
				</div>
			);
		}
	});
	React.renderComponent(
		<tasklist />
		,
		document.getElementById('example')
	);
});
