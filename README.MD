## API

### GET /api/books

Returns a JSON array of book objects.

Optional query parameters:

- `search` – filter by keyword in name or author  
  - Example: `/api/books?search=world`
- `minprice` – minimum price (inclusive)  
- `maxprice` – maximum price (inclusive)  
  - Example: `/api/books?minprice=5&maxprice=10`
- `sort` – sort results  
  - `sort=name`  → sort by name  
  - `sort=price` → sort by price

Examples:

- `/api/books`
- `/api/books?search=world`
- `/api/books?minprice=5&maxprice=10&sort=price`
