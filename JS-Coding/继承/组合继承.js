function person() {
  this.kind = 'person'
}

person.prototype.eat = function (food) {
  console.log(this.name + ' is eating ' + food)
}

function student() {
  person.call(this)
}

student.prototype = new person()
