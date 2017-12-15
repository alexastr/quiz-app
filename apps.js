// creating a variable to store question data
var questions = ['How many teeth do adult cats have?', 'How many hours per day do cats sleep?', 'How many different vocal sounds can a cat make?',
	'How many cat breeds are there in the world?', 'What is the technical term for a cat hairball?', 'Where was the oldest pet cat found?',
	 'Which is the smallest pedigree cat?','How many hairs do cats have per square centrimetre?', 'Who was the first cat blasted into space, and when?',
	  'How did ancient Egyptians mourn family cats that passed away?']

var possibleAnswers = [['20', '26', '30', '34'], ['10-12','12-14','14-16','16-18'], ['20','50','100','200'], ['20','40','60','80'], 
['Bezoar','Kindle','Clowder','Bolus'], ['Egypt','Greece','Persia','Cyprus'], ['Singapura','Bengal','Munchkin','Cornish Rex'], ['5,000','10,000','15,000','20,000'], 
['Felicette in 1963','Henriette in 1969','Fluffy in 1970','Ygritte in 1972'], ['Fasted','Shaved eyebrows','Wore black','Dyed hair']]

var accessKey = Object.keys(questions);
// array of values of correct radio buttons selected
var correctAnswers = [2,3,2,1,0,3,0,3,0,1];
var correctAnswersText = ['30','16-18','100','40','Bezoar','Cyprus','Singapura','20,000','Felicette in 1963','Shaved eyebrows']

// counter to keep track of question numbers
var questionNumber = 0;
var numberCorrect = 0;
var numberWrong = 0;

// creating a function to check answer
var checkAnswer = function(checkedButton,questionNumber,correctAnswers) {
	if (checkedButton == correctAnswers[questionNumber]) {
		return 1; // correct answer
	}
	else {
		return 0;
	}
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

		placeholder.children('div.current-score').html('You have ' + numberCorrect + ' correct and ' + numberWrong + ' incorrect answers')
		placeholder.children('div.current-question').html('You are on question ' + (questionNumber + 1) + ' of 10')

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
			console.log(possibleAnswers[questionNumber[0]])
			placeholder.find('label:first-of-type').html(possibleAnswers[questionNumber][0])
			placeholder.find('label:nth-of-type(2)').html(possibleAnswers[questionNumber][1])
			placeholder.find('label:nth-of-type(3)').html(possibleAnswers[questionNumber][2])
			placeholder.find('label:last-of-type').html(possibleAnswers[questionNumber][3])
		}
	})

// create a function to enter final page after last question, option to restart
	$(document).on('click','#restart',function(event) {
		
	})



})
