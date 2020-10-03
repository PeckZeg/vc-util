import { number, oneOfType, string } from 'vue-types';

export const vueKeyType = () => oneOfType([string(), number()]);
