var app = window.angular.module('app', [])

app.factory('personFactory', personFactory)
app.controller('MainCtrl', MainCtrl)

function personFactory($http) {
	var API_ROOT = 'history?q='
	return {
		get: function(name) {
			return $http
			 .get(API_ROOT + name)
			 .then(function (resp) {
				return resp.data
			})
		}
	}
}

function MainCtrl ($scope, personFactory) {
//	$scope.person = {};
//	angular.element(document).ready(function() {
		$scope.person = {
			name : "Isaac Newton",
			info : "Sir Isaac Newton was an English physicist and mathematician (described in his own day as a \"natural philosopher\") who is widely recognised as one of the most influential scientists of all time and a key figure in the scientific revolution. His book Philosophia Naturalis Principia Mathematica (\"Mathematical Principles of Natural Philosophy\"), first published in 1687, laid the foundations for classical mechanics. Newton made seminal contributions to optics, and he shares credit with Gottfried Wilhelm Leibniz for the development of calculus.",
			image : "images/newton.jpg",
			left_link : {
				name : "Gottfried Wilhelm Leibniz",
				relation : "Newton competed with Leibniz over who first created calculus",
				image : "images/leibniz.jpg"
			},
			center_link : {
				name : "Nicolas Fatio de Duillier",
				relation : "Newton worked with Fatio on writing a new version of one of his works, Principia",
				image : "images/duillier.jpg"
			},
			right_link : {
				name : "John Locke",
				relation : "Newton wrote a number of letters to Locke on philosophy and religion",
				image : "images/locke.jpg"
			}
		};
//	});
	$scope.name_left = $scope.person.left_link.name;
	$scope.name_center = $scope.person.center_link.name;
	$scope.name_right = $scope.person.right_link.name;
	
	$scope.loadLeft = function() {
		personFactory.get($scope.person.left_link.name)
		 .then(function (data) {
//			console.log(data);
			$scope.person = {};
			$scope.person = data[0];
			console.log($scope.person);
		})
	}
	$scope.loadCenter = function() {
                personFactory.get($scope.person.center_link.name)
                 .then(function (data) {
//                      console.log(data);
			$scope.person = {};
                        $scope.person = data[0];
			console.log($scope.person);
                })
        }
	$scope.loadRight = function() {
                personFactory.get($scope.person.right_link.name)
                 .then(function (data) {
//                      console.log(data);
			$scope.person = {};
                        $scope.person = data[0];
			console.log($scope.person);
                })
        }
	
}



/*
name : "Isaac Newton",
                info : "Sir Isaac Newton was an English physicist and mathematician (described in his own day as a \"natural philosopher\") who is widely recognised as one of the most influential scientists of all time and a key figure in the scientific revolution. His book Philosophia Naturalis Principia Mathematica (\"Mathematical Principles of Natural Philosophy\"), first published in 1687, laid the foundations for classical mechanics. Newton made seminal contributions to optics, and he shares credit with Gottfried Wilhelm Leibniz for the development of calculus.",
                image : "images/newton.jpg",
                left_link : {
                        name : "Gottfried William Leibniz",
                        relation : "Newton competed with Leibniz over who first created calculus",
                        image : "images/leibniz.jpg"
                },
                center_link : {
                        name : "Nicolas Fatio de Duillier",
                        relation : "Newton worked with Fatio on writing a new version of one of his works, Principia",
                        image : "images/duillier.jpg"
                },
                right_link : {
                        name : "John Locke",
                        relation : "Newton wrote a number of letters to Locke on philosophy and religion",
                        image : "images/locke.jpg"
                }

*/
