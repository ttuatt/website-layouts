const questions = [
	{
		question: "Какой язык работает в браузере?",
		answers: ["Java", "C", "Python", "JavaScript"],
		correct: 4,
	},
	{
		question: "Что означает CSS?",
		answers: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		],
		correct: 2,
	},
	{
		question: "Что означает HTML?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 1,
	},
	{
		question: "В каком году был создан JavaScript?",
		answers: ["1996", "1995", "1994", "все ответы неверные"],
		correct: 2,
	},
];

// находим элементы

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

// функция очистки формы
function showResults(){
	const resultTemplate = `
		<h2 class="title">%title%</h2>
		<h3 class="summary">%message%</h3>
		<p class="result">%result%</p>
	`;
	let title, message;
	if (score === questions.length) {
		title = 'Поздравляем!';
		message = 'Вы ответили верно на все!';
	} else if ((score*100)/questions.length >= 50) {
		title = 'Неплохой результат!';
		message = 'Вы дали более половины правильных овтетов!';
	} else {
		title = 'Стоит постараться!';
		message = 'Вы дали менее половины правильных овтетов!';
	}
	let result = `${score} из ${questions.length}`;

	const finalMessage = resultTemplate
	.replace('%title%', title)
	.replace('%message%', message)
	.replace('%result%', result);
	headerContainer.innerHTML = finalMessage;


	submitBtn.blur(); submitBtn.innerText = 'Начать заново!';
	submitBtn.onclick = ()=> history.go(); // стрелочная функция, снизу ее аналог
	
				/*function () {
		history.go();// равносильно обновлению страницы
	}
	*/

}

// функция очистки формы
function clearPage(){
	headerContainer.innerHTML = '';
	listContainer.innerHTML = '';
}




// функция для отображения вопросов
function ShowQuestion(){

	// вопрос
	const headerTemplate = `<h2 class="title">%title%</h2>`;// шаблон для заголовка
	const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
	headerContainer.innerHTML = title;

	// варианты ответов
	let answerNumber = 1;
	for (answerText of questions[questionIndex]['answers']) {
		const quesstionTemplate =  `
			<li>
				<label>
					<input value="%number%" type="radio" class="answer" name="answer" />
					<span>%answer%</span>
				</label>
			</li>`;
		const answer = quesstionTemplate
		.replace('%answer%', answerText)
		.replace('%number%', answerNumber);
		
		
		listContainer.innerHTML += answer;
		answerNumber++;
	}
	
}
// проверка ответа
function checkAnswer(){
	//выбранная радио кнопка
	const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');
	
	// если ответ не выбран выходим из функции
	if (!checkedRadio) {
		submitBtn.blur();
		return
	}
	// значение выбранной кнопки для проверки правильного ответа
	const userAnswer = parseInt(checkedRadio.value);
	
	if (userAnswer === questions[questionIndex].correct) {
		score++;
	}
	
	if (questionIndex !== questions.length-1) {
		questionIndex++;
		clearPage();
		ShowQuestion();
	} else {
		clearPage();
		showResults();
	}
	
}

// перменные игры

let score = 0; // кол-во правельных ответов
let questionIndex = 0; // текущий вопрос



clearPage();
ShowQuestion();
submitBtn.onclick = checkAnswer;
