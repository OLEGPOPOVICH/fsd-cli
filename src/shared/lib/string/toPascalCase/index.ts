/**
 * Преобразует строку в паскаль кейс регистр
 * @param {string} value - строка
 * @returns {string} - строка в паскаль кейс регистре
 */
export const toPascalCase = (value: string): string => {
  return value
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[-_]+|[^\p{L}\p{N}]/gu, ' ')
    .toLowerCase()
    .replace(/(?:^|\s)(\p{L})/gu, (_, letter) => letter.toUpperCase())
    .replace(/\s+/g, '');
};
