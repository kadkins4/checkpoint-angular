/* global angular */

(function () {
  angular.module('musingsApp', [])
  .factory('musings', [
    musingService
  ])
  .controller('musingController', [
    'musingService',
    musingControllerFunction
  ])

  function musingControllerFunction (musingService) {
    this.musings = musingService.all()
    this.newMusing = { title: '', content: '', author: '' }
  }

  function musingService () {
    this.musings = [
     { title: 'Hello', content: 'it is me', author: 'wondering' },
     { title: 'hello there', content: 'the angel from my nightmare', author: 'shadow' },
     { title: 'candyman', content: 'tempting the thoughts of a', author: 'sweettooth' },
     { title: 'applebottom jeans', content: 'boots with the fur', author: 'the whole club' }
    ]

    return {
      all: all
    }

    function all () {
      return musings.all
    }

    function create () {

    }

    function remove ($index) {
      this.musing.splice($index, 1)
    }
  }
})()
