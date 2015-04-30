/// <reference path="react.d.ts" />

var Timer = React.createClass({
    render: function () {
        return <span>{this.props.time.toUTCString()}</span>;
    }
});

var Greeter = React.createClass({
    shouldComponentUpdate: function () {
        if (this.state.needsRender) {
            this.setState({
                needsRender: false
            });

            this.props.time = new Date();
            return true;
        }

        return false;
    },
    updateTime: function () {
        this.setState({
            needsRender: true
        });
    },
    getInitialState: function () {
        return { needsRender: false };
    },
    componentDidMount: function () {
        setInterval(this.updateTime, this.props.timeInterval);
    },
    render: function () {
        return <div>The time is: <Timer time={this.props.time} /></div>;
    }
});
var timeObj = new Date();
React.render(<Greeter time={new Date()} timeInterval="500" />, document.getElementById("content"));