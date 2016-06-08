

//回去联系搞懂。。
var ColorPanel = React.createClass({
  getDefaultProps: function() {
    return {
      colors: [
        {id: 1, value: 'red', title: 'red'}, 
        {id: 2, value: 'blue', title: 'blue'}, 
        {id: 3, value: 'green', title: 'green'}, 
        {id: 4, value: 'yellow', title: 'yellow'}, 
        {id: 5, value: 'pink', title: 'pink'}, 
        {id: 6, value: 'black', title: 'black'}
      ],
      defaultColorId: 1
    }
  },
  getInitialState: function() {
    return {
      selectedColor: this.getSelectedColor(this.props.defaultColorId)
    }
  },
  getSelectedColor: function(colorId) {
    if(!colorId){
      return null;
    };
    var length = this.props.colors.length;
    for(var i = 0; i< length; i++) {
      if(this.props.colors[i].id === colorId){
        break;
      }
    }
    return this.props.colors[i];
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.state.selectedColor.id !== nextState.selectedColor.id;
  },
  render: function() {
    console.log('Render Color Panel');
    return (
      <div>
        <ColorDisplay selectedColor={this.state.selectedColor}/>
        <ColorBar colors={this.props.colors} onColorHover={this.onColorHover} />
      </div>
    );
  },
  onColorHover: function(colorId) {
    this.setState({
      selectedColor: this.getSelectedColor(colorId)
    });
  }
});
var ColorBar = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    console.log('Render Color Bar Component');
    return (
     <ul>
        {
          this.props.colors.map(function(color){
            return (
              <li key={color.id} 
                  onMouseOver={this.props.onColorHover.bind(null, color.id)} 
                  className={color.value}>
                  {color.value}
              </li>
            )
         }, this)
        }
     </ul>
    );
  }
});
var ColorDisplay = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return this.props.selectedColor.id !== nextProps.selectedColor.id;
  },
  render: function() {
    console.log('Render Color Display Component');
    return (
      <div className="color-display">
        <div className={this.props.selectedColor.value}>
          {this.props.selectedColor.title}
        </div>
      </div>
    );
  }
});
ReactDOM.render(<ColorPanel colors={colors}/>, document.getElementById('example'));
var colors = [
  {id: 1, value: 'red', title: 'red'}, 
  {id: 2, value: 'blue', title: 'blue'}, 
  {id: 3, value: 'green', title: 'green'}, 
  {id: 4, value: 'yellow', title: 'yellow'}, 
  {id: 5, value: 'pink', title: 'pink'}, 
  {id: 6, value: 'black', title: 'black'}
];