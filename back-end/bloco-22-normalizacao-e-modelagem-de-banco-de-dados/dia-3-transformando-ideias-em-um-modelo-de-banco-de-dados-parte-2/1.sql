CREATE VIEW film_with_categories AS
SELECT f.title, fc.category_id, c.`name`
FROM film_category AS fc
INNER JOIN category AS c
ON fc.category_id = c.category_id
INNER JOIN film AS f
ON fc.film_id = f.film_id
ORDER BY title;

SELECT * FROM film_with_categories;