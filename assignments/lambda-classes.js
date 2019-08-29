// CODE here for your Lambda Classes
class Person1 {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person1 {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student,subject) {
        return `${student} receives a perfect score on ${subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor(projectManagersAttributes) {
        super(projectManagersAttributes);
        this.gradClassName = projectManagersAttributes.gradClassName;
        this.favInstructor = projectManagersAttributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student,subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`
    }
}

class Student extends Person1 {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(function(favor) {
          console.log(favor);
        });
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

var femi = new Student({
                name: 'Oluwafemi', age: 29, location: 'Nigeria', 
                previousBackground: 'Banking', className: 'WEBEU3', 
                favSubjects: ['Web-design', 'Python', 'UX design', 'JavaScript']});

var martin = new ProjectManagers({name: 'Martin', age: 25, location: 'Ghana', 
                                specialty: 'Project Management', favLanguage: 'Java', 
                                catchPhrase: 'Super... Awesome.. Awesome', gradClassName: 'WEBEU2', 
                                favInstructor: 'Gabriel'});

var gabe = new Instructor({name: 'Gabe', age: 42, location: 'England', 
                           specialty: 'React', favLanguage: 'JavaScript', 
                           catchPhrase: 'Turn on your Cameras so your Team Leads can spy on you', });                               