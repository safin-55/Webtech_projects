function analyzeText() {
  var text = document.getElementById("inputText").value;

  document.getElementById("resultBox").style.display = "none";
  document.getElementById("errorMsg").style.display = "none";

  if (text.trim() == "") {
    document.getElementById("errorMsg").style.display = "block";
    return;
  }

  var totalChars = text.length;

  var wordsArray = text.trim().split(" ");
  var totalWords = 0;
  for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] != "") {
      totalWords++;
    }
  }

  var reversed = text.split("").reverse().join("");

  document.getElementById("charCount").innerHTML = totalChars;
  document.getElementById("wordCount").innerHTML = totalWords;
  document.getElementById("reversedText").innerHTML = reversed;
  document.getElementById("resultBox").style.display = "block";
}

function clearAll() {
  document.getElementById("inputText").value = "";
  document.getElementById("resultBox").style.display = "none";
  document.getElementById("errorMsg").style.display = "none";
}
