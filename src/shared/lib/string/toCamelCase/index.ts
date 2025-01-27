/**
 * Преобразует строку в верблюжий регистр
 * @param {string} value - строка
 * @returns {string} - строка в верблюжем регистре
 */
export const toCamelCase = (value: string): string => {
  const alteredString = value
    .toLowerCase()
    .replace(/[^a-z0-9](.)/g, (_, c) => c.toUpperCase());

  return alteredString.charAt(0).toLowerCase() + alteredString.slice(1);
};
