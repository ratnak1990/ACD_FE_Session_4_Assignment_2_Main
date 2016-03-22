function Person(name,age,schoolName,birthYear){
    this.name=name;
    this.age=age;
    this.schoolName=schoolName;
    this.birthYear=birthYear;
    
}
function Student(){
   
        
   
    
}
Student.prototype=new Person("Rohan",7,"Gokuldham High School",2008);
Student.prototype.changeProperty= function (name){
    this.name=name;
};
var student1=new Student();
console.log(student1.name);
student1.changeProperty("Ritesh");
console.log(student1.name);
//console.log(student1);
//student1.changeName("Virat");

