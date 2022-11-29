function animate_string(id) {
  const element = document.getElementById(id);
  const textNode = element.childNodes[0];
  let text = textNode.data;
  console.log(text);

  setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 1000);
}

/**
 * Tushuntirish:
 *
 * document.getElementById(id) : Elementga
 *  identifikatori boʻyicha havolani qaytaradi;
 *  identifikator elementni aniqlash uchun ishlatilishi mumkin bo'lgan qatordir;
 *  u HTML-dagi id atributi yoki skript yordamida o'rnatilishi mumkin.
 *
 * Parametrlar : id - izlanayotgan elementning noyob identifikatorini
 *  ifodalovchi katta-kichik harflarga sezgir satr.
 *
 * element.childNodes[0] birinchi tugunning
 * HTML mazmuni bilan bir xil natija beradi.
 */

