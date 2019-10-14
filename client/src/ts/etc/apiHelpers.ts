/**
 * Convert a JS object into GET URL parameters
 * 
 * @param base Base URL atop which to add GET parameters
 * @param params Object to insert into a URL string
 */
export function makeUrl(base: string, params?: object):string {
    if (params){
        let out: string = base + "?";

        Object.keys(params).forEach( k => {
            out += k;
            out += '=';
            out += params[k];
            out += "&";
        })
        return out.replace(/&$/g, "");
    }
    else {
        return base;
    }
};

/**
 * Convert information in GET request into the message for a POST request    
 */
export const toPayload = (toSend) => {return {
    method:"POST",
    body:JSON.stringify(toSend),
    headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
}}