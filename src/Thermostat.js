function Thermostat() {
  this._temperature = 20;
}

Thermostat.prototype = {
  increase: function() {
    this._temperature ++; 
  },

};
