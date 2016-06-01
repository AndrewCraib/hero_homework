var Hero = require ('../hero')
var Food = require ('../hero')
var Rat = require ('../hero')
var Wizard = require ('../hero')
var assert = require('chai').assert;

describe('a hero', function(){

 it('should talk', function () {
  this.talk();
   assert.equal("hello my name is Andrew", this.name );
 });

 // it('should eat and gain health, and gain more health if its the favourite food', function() {
 //  this.eat()
 //  assert.equal(, )
 // })

