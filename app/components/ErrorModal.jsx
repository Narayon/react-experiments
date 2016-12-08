var React = require('react');
var ReactDOM = require('react-dom');
var ReactServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: () => ({
    title: "Uhooh, here's trouble."
  }),
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function() {
    var {message, title} = this.props;

    var modalMarkup =  (
      <div id="error-modal" className="reveal text-center" data-reveal="">
        <h3>{title}</h3>
        <p>{message}</p>
        <button className="button hollow" data-close="">OK</button>
      </div>
    );

    var $modal = $(ReactServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    var {message, title} = this.props;

    return (
      <div>
      </div>
    );
  }
});

module.exports = ErrorModal;