const getLanguage = (defaultLang = 'en') => {
  let lang = defaultLang

  if (navigator.languages) {
        // chrome does not currently set navigator.language correctly https://code.google.com/p/chromium/issues/detail?id=101138
        // but it does set the first element of navigator.languages correctly
    lang = navigator.languages[0]
  } else if (navigator.userLanguage) {
        // IE only
    lang = navigator.userLanguage
  } else {
        // firefox + safari set this correctly
    lang = navigator.language
  }

  return lang
}

export default getLanguage
