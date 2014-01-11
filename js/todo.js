/** @jsx React.DOM */

$(function() {
	var tasklist = React.createClass({
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

		list: function() {
			return (
				<div className="panel-body">
					<ul className="list-unstyled">
					</ul>
				</div>
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
					{this.list()}
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
