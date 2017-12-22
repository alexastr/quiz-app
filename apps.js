// creating a variable to store question data
const questions = ['How many teeth do adult cats have?', 'How many hours per day do cats sleep?', 'How many different vocal sounds can a cat make?',
	'How many cat breeds are there in the world?', 'What is the technical term for a cat hairball?', 'Where was the oldest pet cat found?',
	 'Which is the smallest pedigree cat?','How many hairs do cats have per square centrimetre?', 'Who was the first cat blasted into space, and when?',
	  'How did ancient Egyptians mourn family cats that passed away?']

const possibleAnswers = [['20', '26', '30', '34'], ['10-12','12-14','14-16','16-18'], ['20','50','100','200'], ['20','40','60','80'], 
['Bezoar','Kindle','Clowder','Bolus'], ['Egypt','Greece','Persia','Cyprus'], ['Singapura','Bengal','Munchkin','Cornish Rex'], ['5,000','10,000','15,000','20,000'], 
['Felicette in 1963','Henriette in 1969','Fluffy in 1970','Ygritte in 1972'], ['Fasted','Shaved eyebrows','Wore black','Dyed hair']]

var possibleAnswers2 = {
	one: ['20', '26', '30', '34']
}

var accessKey = Object.keys(possibleAnswers2);
// array of values of correct radio buttons selected
const correctAnswers = [2,3,2,1,0,3,0,3,0,1];
const correctAnswersText = ['30','16-18','100','40','Bezoar','Cyprus','Singapura','20,000','Felicette in 1963','Shaved eyebrows']
const catPhotos = ['cat-teeth.jpg','sleeping-cat.jpg','cat-meow.jpg','cat-breeds.jpg','hairball-cat.jpg','old-cat.jpg','tiny-cat.jpg','cat-hair.jpg','space-cat.jpg','crazy-cat.jpg']

// counter to keep track of question numbers
let questionNumber = 0;
let numberCorrect = 0;
let numberWrong = 0;

// creating a function to check answer
const checkAnswer = function(checkedButton,questionNumber,correctAnswers) {
	return 	(checkedButton == correctAnswers[questionNumber])

	// if (checkedButton == correctAnswers[questionNumber]) {
	// 	return 1; // correct answer
	// }
	// else {
	// 	return 0;
	// }
}

//starting jQuery
$(function() {
	// creating a function to go from initial page to quiz questions
	$(document).on('click','#initial-submit-button',function(event) {
		event.preventDefault()
		$(this).parents('.initial-page').toggleClass('hidden')
		$(this).parents('.initial-page').siblings('.cat-questions').toggleClass('hidden')
	})

// creating a function to go to correct or incorrect page
	$(document).on('click','#answer-submission',function(event) {
		event.preventDefault()
		let checkedButton = $('input[name=answer]:checked').val();
		let checkAnswerResult = checkAnswer(checkedButton,questionNumber,correctAnswers)

		$(this).parents('div.cat-questions').toggleClass('hidden')
		let placeholder = $(this).parents('.cat-questions').siblings('.solution')
		placeholder.toggleClass('hidden')
			if (checkAnswerResult == 1) {
				placeholder.children('p:first-of-type').text('Meow! You are a cat conoisseur!')
				placeholder.children('button').text('Too easy! Give me a harder question!')
				numberCorrect = numberCorrect + 1
			}
			else {
				placeholder.children('p').text('Grrr! You must be a dog lover!')
				placeholder.children('button').text('Woof woof! Give me another question!')
				numberWrong = numberWrong + 1
			}
		placeholder.children('p:last-of-type').text('The correct answer is: ' + correctAnswersText[questionNumber])

		placeholder.find('div.current-score').html('<p> Correct answers: ' + numberCorrect + '</br> Incorrect answers: ' + numberWrong + '</p>')
		placeholder.find('div.current-question').html('Question ' + (questionNumber + 1) + ' of 10')

		questionNumber = questionNumber + 1
	})


// create a function to get next question
	$(document).on('click','#next-question',function(event) {
		event.preventDefault()
		$(this).parent().toggleClass('hidden')

		if (questionNumber == 10) {	
			let placeholder = $(this).parent().siblings('.end-page')
			placeholder.toggleClass('hidden')
			placeholder.find('p').html('You finished the quiz! Your score is ' + numberCorrect + ' out of 10' )
		}

		else {
			let placeholder = $(this).parent().siblings('.cat-questions')
			placeholder.toggleClass('hidden')
			placeholder.find('p').html(questions[questionNumber])
			// console.log(possibleAnswers[questionNumber[0]])
			$('div .question:nth-child(2)').children('label').html(possibleAnswers[questionNumber][0])
			$('div .question:nth-child(3)').children('label').html(possibleAnswers[questionNumber][1])

			// placeholder.find('label:first-of-type').html(possibleAnswers2.[0])

			placeholder.find('label:nth-of-type(2)').html(possibleAnswers[questionNumber][1])
			placeholder.find('label:nth-of-type(3)').html(possibleAnswers[questionNumber][2])
			placeholder.find('label:last-of-type').html(possibleAnswers[questionNumber][3])
		}

		$('.cat-photo img').attr('src','photos/' + catPhotos[questionNumber])
	})


// create a function to change the image displayed

// create a function to enter final page after last question, option to restart
	$(document).on('click','#restart',function(event) {
		event.preventDefault()
		location.reload()

// function to reset the variables

	})



})
