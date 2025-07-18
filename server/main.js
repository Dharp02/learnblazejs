import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';


Meteor.startup(async() => {
  if (await TasksCollection.find().countAsync() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach((item)=>{
      TasksCollection.insertAsync({"text":item})
    })
  }
});