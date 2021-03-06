// run when meteor app is started
Meteor.startup(function(){

  // ako nema pool kreiraj sample data
  if(Polls.find().count() === 0){

    //kreiraj sample polls
    var samplePolls = [
      {
        question: 'Is Meteor awesome?',
        choices: [
          {text: 'Of course!', votes: 0},
          {text: 'Eh', votes: 0},
          {text: 'No, I like plain JS', votes: 0},
        ]
      },
      {
        question: 'Is CSS3 Flexbox the greatest thing since array_slice(bread)?',
        choices: [
          {text: '100% yes', votes: 0},
          {text: '200% yes', votes: 0},
          {text: '300% yes', votes: 0},
        ]
      }
    ];

    //loop over each sample poll and instert into database
    _.each(samplePolls, function(poll){
      Polls.insert(poll);
    });

  }
});
