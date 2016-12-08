var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function() {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  getDefaultProps: () => ({
    title: "Uhooh, here's trouble."
  }),
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  render: function() {
    var {message, title} = this.props;

    return (
      <div id="error-modal" className="reveal text-center" data-reveal="">
        <h3>{title}</h3>
        <p>{message}</p>
        <button className="button hollow" data-close="">OK</button>
      </div>
    );
  }
});

module.exports = ErrorModal;