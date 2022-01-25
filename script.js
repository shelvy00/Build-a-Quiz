function submitAnswers() {
	const q1 = document.quiz.question1.value;
	const q2 = document.quiz.question2.value;
	const q3 = document.quiz.question3.value;
	const q4 = document.quiz.question4.value;
	let result1 = document.getElementById("result1");
	let result2 = document.getElementById("result2");
	let result3 = document.getElementById("result3");
	let result4 = document.getElementById("result4");

	if (q1 === "Tom Brady") {
		result1.innerHTML = "Tom Brady was the right answer!"
	}

	if (q2 === "6") {
		result2.innerHTML = "6 was the right answer!"
	}

	if (q3 === "Tariq") {
		result3.innerHTML = "Tariq was the right answer!"
	}

	if (q4 === "Power") {
		result4.innerHTML = "Power was the right answer!"
	}

	if (q1 !== "Tom Brady") {
		result1.innerHTML = "Wrong answer! Come on Man Tom Brady is the correct answer! 7 Chips!"
	}

	if (q2 !== "6") {
		result2.innerHTML = "Wrong answer! just turn on ESPN. The answer is 6"
	}

	if (q3 !== "Tariq") {
		result3.innerHTML = "Wrong answer! It's okay it took me 5 boring episodes to find out smh. The answer is Tariq"
	}

	if (q4 !== "Power") {
		result4.innerHTML = "Wrong answer! Ghost is one of my favorite characters of all time. The answer is Power"
	}
}	
	