
function BoardMember(name, homeState, training) {
  this.veto = function() {return 'No, I must disagree'};
  this.approve = function() {return 'You can do that!'};
  this.doCharity = function() {return 'I like to help people.'};

}
