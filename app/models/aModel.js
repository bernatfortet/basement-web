var aModel,
  __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

aModel = (function(_super) {

  __extends(aModel, _super);

  function aModel() {
    aModel.__super__.constructor.apply(this, arguments);
  }

  aModel.configure('Model', 'name');

  return aModel;

})(Spine.Model);
