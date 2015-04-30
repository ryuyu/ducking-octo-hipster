/// <reference path="react.d.ts" />

var Timer = React.createClass({
    render: function () {
        return React.createElement("span", null, this.props.children.time.toUTCString());
    }
});

var Greeter = React.createClass({
    shouldComponentUpdate: function () {
        if (this.state.needsRender) {
            this.setState({
                needsRender: false
            });
            var cat = 1;
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
        return { needRender: false };
    },
    componentDidMount: function () {
        setInterval(this.updateTime, this.props.timeInterval);
    },
    render: function () {
        return React.createElement("div", null, "The time is: ", React.createElement(Timer, null, {time: this.props.time }));
    }
});

window.onload = () => {
    var container: HTMLDivElement = document.createElement("div");
    document.body.appendChild(container);

    React.render(
        React.createElement(Greeter, { time: new Date(), timeInterval: 1000 }),
        container
        );
}