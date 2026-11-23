/**
 * Данные товара.
 *
 * @property {number} id - Уникальный идентификатор товара
 * @property {string} name - Название товара
 * @property {number} price - Стоимость товара
 * @property {string} [category] - Категория товара
 * @property {string} [description] - Описание товара
 * @property {string} thumbnail - Ссылка на изображение товара
 */

export interface IProduct {
	id: number;
	name: string;
	price: number;
	category?: string;
	description?: string;
	thumbnail: string;
}
