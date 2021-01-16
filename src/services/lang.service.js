let langs = {};

export const getLocale=()=>{
    let locale=navigator.language||navigator.userLanguage;
    return locale.substring(0,2);
}

export const creacionGlobal=()=>{        
    import(`../lang/${getLocale()}/index`).then((traducciones) => {
        console.log(traducciones['cita'])
        langs=traducciones['cita']
        console.log(langs)    
        return langs;      
    });
}
