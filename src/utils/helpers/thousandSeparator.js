

export function formatNumberWithThousandsSeparator(number, locale = 'fr-FR', options = {}) {
    return number.toLocaleString(locale, options);
}


export function formatNumberDecimalWithThousandsSeparator(number, locale = 'fr-FR', options = {}) {
    // Formate le nombre avec un séparateur de milliers et supprime les décimales .00 si elles existent
    return number.toLocaleString(locale, { maximumFractionDigits: 2, ...options }).replace(/\.00$/, '').replace(/\./g, ' ');
}