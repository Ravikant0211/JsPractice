function Assignment() {
    this.make = function (builder) {
      builder.createAssignment();
      builder.addSubject();
      builder.addLevel();
      builder.addDueDate();
      return builder.get();
    }
  }
  
  function AssignmentBuilder(subject, level, dueDate) {
    this.assignment = null;
    
    this.createAssignment = function () {
      this.assignment = new SubjectAssignment();
    }
    
    this.addSubject = function () {
      this.assignment.addSubject(subject);
    }
    
    this.addLevel = function () {
      this.assignment.addLevel(level);
    }
    
    this.addDueDate = function () {
      this.assignment.addDueDate(dueDate);
    }
    
    this.get = function () {
      return this.assignment;
    }
  }
  
  function SubjectAssignment() {
    this.subject = null;
    this.level = null;
    this.dueDate = null;
    
    this.addSubject = function (subject) {
      this.subject = subject;
    }
    
    this.addLevel = function (level) {
      this.level = level;
    }
    
    this.addDueDate = function (dueDate) {
      this.dueDate = dueDate;
    }
  
    this.announcement = function(){
      console.log(`Your ${this.subject} assignment's difficulty level is: ${this.level}. It is due on ${this.dueDate}.`);
    }
  }
  
  try {
    var assignmentBuilder = new AssignmentBuilder("Math", "Hard", "12th June, 2020");
    var assignment = new Assignment();
    var mathAssignment = assignment.make(assignmentBuilder);
    mathAssignment.announcement();
  } catch (e) {
    console.log(e);
  }
  
  // Your Math assignment's difficulty level is: Hard. It is due on 12th June, 2020.