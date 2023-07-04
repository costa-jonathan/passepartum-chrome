 function createTranslationMap(original, translation) {
    console.log(original);
    console.log(translation);
    const translationMap = {};

  // Check if both lists have the same length
  if (original.length !== translation.length) {
    console.error("The 'original' and 'translation' lists should have the same length.");
    //return null;
  }

  // Create the translation mapping
  for (let i = 0; i < original.length; i++) {
    const originalText = original[i];
    const translatedText = translation[i];
    translationMap[originalText] = translatedText;
  }

  return translationMap;
}



document.addEventListener('DOMContentLoaded', function () {
    const browserLanguage = navigator.language;
    console.log(navigator.language)
    const allText = document.body.innerText;
    const textLines = allText.split('\n').map(line => line.trim()).filter(line => line !== '');

    const url = ' http://127.0.0.1:8000/api/v1/translate/';
    const data = {
    language: browserLanguage,
    text: textLines,
    };
    fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
   .then(response => response.json())
   .then(data =>  {
    
    const translationMap = createTranslationMap(data['original'], data['translation']);
    console.log(translationMap);
    if (translationMap && browserLanguage == "de") {
        const elements = document.body.getElementsByTagName("*");
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const textContent = element.textContent.trim();

            if (translationMap.hasOwnProperty(textContent)) {
            element.textContent = translationMap[textContent];
            }
        }
}
});
});



  

  
  