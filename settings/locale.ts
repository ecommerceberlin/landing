export function resolveAltLocale(){
    const locale = process.env.NEXT_PUBLIC_LOCALE;
    if(locale === "en"){
        return {
            href: "https://ecommerceberlin.de",
            locale: "de"
        };
    }else{
        return {
            href: "https://ecommerceberlin.com",
            locale: "en"
        };
    }
   
}