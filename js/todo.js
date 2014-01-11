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
							<input type="text" className="form-control" placeholder="Enter task" />
						</div>
						<button type="submit" className="btn btn-primary pull-right">Create</button>
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
											{this.enable_item()}
										</li>
									)
								} else {
									return (
										<li className="panel lead clearfix">
											{this.disable_item()}
										</li>
									)
								}
							}, this)}
					</ul>
				</div>
			);
		},

		enable_item: function() {
			return (
				<div className="form-inline">
					<div className="col-sm-9">
						<input type="text" className="form-control" value="Some task"/>
					</div>
					<div className="btn-group pull-right">
						<button type="button" className="btn btn-primary btn-sm">
							<span className="glyphicon glyphicon-ok"></span>
						</button>
						<button type="button" className="btn btn-warning btn-sm">
							<span className="glyphicon glyphicon-remove"></span>
						</button>
					</div>
				</div>
			);
		},

		disable_item: function() {
			return (
				<div>
					<span className="col-sm-8">Some task</span>
					<div className="btn-group pull-right">
											{this.button_pencil()}
											{this.button_remove()}
					</div>
				</div>
				);
		},

		button_pencil: function() {
			return (
				<button type="button" className="btn btn-primary btn-sm">
					<span className="glyphicon glyphicon-pencil"></span>
				</button>
			);
		},

		button_remove: function() {
			return (
				<button type="button" className="btn btn-warning btn-sm">
					<span className="glyphicon glyphicon-remove"></span>
				</button>
			);
		},

		button_ok: function() {
			return (
				<button type="button" class="btn btn-primary btn-sm">
					<span class="glyphicon glyphicon-ok"></span>
				</button>
			);
		},

		item: function() {
			return (
				<li className="panel lead clearfix">
				</li>
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
