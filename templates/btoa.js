const b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

export const btoa = (string) => {
    string = String(string);
    let bitmap;
    let a;
    let b;
    let c;
    let result = '';
    let i = 0;
    const rest = string.length % 3;
    for (; i < string.length; ) {
        if (
            (a = string.charCodeAt(i++)) > 255 ||
            (b = string.charCodeAt(i++)) > 255 ||
            (c = string.charCodeAt(i++)) > 255
        )
            throw new TypeError(
                "Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.",
            );
        bitmap = (a << 16) | (b << 8) | c;
        result +=
            b64.charAt((bitmap >> 18) & 63) +
            b64.charAt((bitmap >> 12) & 63) +
            b64.charAt((bitmap >> 6) & 63) +
            b64.charAt(bitmap & 63);
    }
    return rest ? result.slice(0, rest - 3) + '==='.substring(rest) : result;
};
