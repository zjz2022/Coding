function person() {
  this.kind = 'person'
}

person.prototype.eat = function (food) {
  console.log(this.name + ' is eating ' + food)
}

function student() {
  person.call(this)
}

student.prototype = person.prototype
// 或者 student.prototype = Object.create(person.prototype);
student.prototype.constructor = student
