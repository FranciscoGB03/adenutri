export const getLocale = () => {    
    let locale = localStorage.getItem("localeStorage") == null ?
        localStorage.setItem("localeStorage", navigator.language || navigator.userLanguage) :
        localStorage.getItem("localeStorage");
    return locale.substring(0, 2);
}