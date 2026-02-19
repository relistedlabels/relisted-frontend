# RELISTED Backend Routes - Required Endpoints

## 1. Brand Routes

### GET /brands

**Fetch all brands**

- Auth: Optional
- Response (200):

```json
[
  {
    "id": "uuid",
    "name": "string",
    "userId": "uuid",
    "fullText": "string",
    "createdAt": "ISO-8601"
  }
]
```

### POST /brands

**Create new brand**

- Auth: Required (JWT)
- Auto-attach userId from token

```json
Request:
{
  "name": "string (required, e.g., 'Gucci')"
}

Response (201):
{
  "id": "uuid",
  "name": "string",
  "userId": "uuid",
  "fullText": "string",
  "createdAt": "ISO-8601"
}
```

---

## 2. Category Routes

### GET /categories

**Fetch all categories**

- Auth: Optional
- Response (200):

```json
[
  {
    "id": "uuid",
    "name": "string",
    "userId": "uuid",
    "createdAt": "ISO-8601"
  }
]
```

### POST /categories

**Create new category**

- Auth: Required (JWT)
- Auto-attach userId from token

```json
Request:
{
  "name": "string (required, e.g., 'Mini dress')"
}

Response (201):
{
  "id": "uuid",
  "name": "string",
  "userId": "uuid",
  "createdAt": "ISO-8601"
}
```

---

## 3. Tags Routes

### GET /tags

**Fetch all tags**

- Auth: Optional
- Response (200):

```json
[
  {
    "id": "uuid",
    "name": "string",
    "createdAt": "ISO-8601"
  }
]
```

### POST /tags

**Create new tag**

- Auth: Required (JWT)

```json
Request:
{
  "name": "string (required, e.g., 'New season')"
}

Response (201):
{
  "id": "uuid",
  "name": "string",
  "createdAt": "ISO-8601"
}
```

---

## 4. Product Routes

### POST /products

**Create new product**

- Auth: Required (JWT)

```json
Request:
{
  "name": "string",
  "subText": "string",
  "description": "string",
  "originalValue": "number",
  "dailyRentalPrice": "number",
  "quantity": "number",
  "condition": "string",
  "size": "string",
  "color": "string",
  "composition": "string",
  "measurement": "string",
  "careInstruction": "string",
  "careSteps": "string",
  "stylingTip": "string",
  "warning": "string",
  "brandId": "uuid",
  "categoryId": "uuid",
  "tagIds": ["uuid"],
  "attachmentIds": ["uuid"]
}

Response (201):
{
  "id": "uuid",
  "name": "string",
  "subText": "string",
  "description": "string",
  "originalValue": "number",
  "dailyPrice": "number",
  "condition": "string",
  "quantity": "number",
  "size": "string",
  "color": "string",
  "composition": "string",
  "measurement": "string",
  "careInstruction": "string",
  "careSteps": "string",
  "stylingTip": "string",
  "warning": "string",
  "brandId": "uuid",
  "categoryId": "uuid",
  "tagIds": ["uuid"],
  "attachments": {
    "uploads": [
      {
        "id": "uuid",
        "url": "string (cloudinary URL)"
      }
    ]
  },
  "createdAt": "ISO-8601",
  "updatedAt": "ISO-8601"
}
```

### PUT /products/:id

**Update product**

- Auth: Required (JWT) - User must be owner

```json
Request (all fields optional):
{
  "name": "string",
  "subText": "string",
  "description": "string",
  "originalValue": "number",
  "dailyRentalPrice": "number",
  "quantity": "number",
  "condition": "string",
  "size": "string",
  "color": "string",
  "composition": "string",
  "measurement": "string",
  "careInstruction": "string",
  "careSteps": "string",
  "stylingTip": "string",
  "warning": "string",
  "brandId": "uuid",
  "categoryId": "uuid",
  "tagIds": ["uuid"],
  "attachmentIds": ["uuid"]
}

Response (200):
[Full product object - same as POST response]
```

---

## Integration Files

| Route         | File                      |
| ------------- | ------------------------- |
| `/brands`     | `src/lib/api/brands.ts`   |
| `/categories` | `src/lib/api/category.ts` |
| `/tags`       | `src/lib/api/tags.ts`     |
| `/products`   | `src/lib/api/product.ts`  |

---

## Authentication

All protected routes require:

```
Authorization: Bearer {jwt_token}
```

### POST /auth/sign-up

**Create new user account**

```json
Request:
{
  "email": "string",
  "password": "string",
  "name": "string"
}

Response (201):
{
  "id": "uuid",
  "email": "string",
  "name": "string",
  "role": "DRESSER|LISTER|ADMIN",
  "token": "jwt_token",
  "createdAt": "ISO-8601"
}
```

### POST /auth/sign-in

**User login**

```json
Request:
{
  "email": "string",
  "password": "string"
}

Response (200):
{
  "id": "uuid",
  "email": "string",
  "name": "string",
  "role": "DRESSER|LISTER|ADMIN",
  "token": "jwt_token",
  "createdAt": "ISO-8601"
}
```

### GET /auth/me

**Get current user profile**

- Auth: Required (JWT)
- Response (200): User object with full details

---

## 2. Brand Routes

### GET /brands

**Fetch all brands**

- Auth: Optional
- Response (200):

```json
[
  {
    "id": "uuid",
    "name": "string",
    "userId": "uuid",
    "fullText": "string",
    "createdAt": "ISO-8601"
  }
]
```

### POST /brands

**Create new brand**

- Auth: Required (JWT)
- Auto-attach userId from token

```json
Request:
{
  "name": "string (required, e.g., 'Gucci')"
}

Response (201):
{
  "id": "uuid",
  "name": "string",
  "userId": "uuid",
  "fullText": "string",
  "createdAt": "ISO-8601"
}
```

---

## 3. Category Routes

### GET /categories

**Fetch all categories**

- Auth: Optional
- Response (200):

```json
[
  {
    "id": "uuid",
    "name": "string",
    "userId": "uuid",
    "createdAt": "ISO-8601"
  }
]
```

### POST /categories

**Create new category**

- Auth: Required (JWT)
- Auto-attach userId from token

```json
Request:
{
  "name": "string (required, e.g., 'Mini dress')"
}

Response (201):
{
  "id": "uuid",
  "name": "string",
  "userId": "uuid",
  "createdAt": "ISO-8601"
}
```

---

## 4. Tags Routes

### GET /tags

**Fetch all tags**

- Auth: Optional
- Response (200):

```json
[
  {
    "id": "uuid",
    "name": "string",
    "createdAt": "ISO-8601"
  }
]
```

### POST /tags

**Create new tag**

- Auth: Required (JWT)

```json
Request:
{
  "name": "string (required, e.g., 'New season')"
}

Response (201):
{
  "id": "uuid",
  "name": "string",
  "createdAt": "ISO-8601"
}
```

---

## 5. Product Routes

### GET /products

**Fetch all products**

- Auth: Optional
- Query Params: `page`, `limit`, `search`, `brandId`, `categoryId`, `tagIds` (comma-separated)
- Response (200):

```json
{
  "data": [
    {
      "id": "uuid",
      "name": "string",
      "description": "string",
      "originalValue": "number",
      "dailyPrice": "number",
      "condition": "string",
      "quantity": "number",
      "size": "string",
      "color": "string",
      "composition": "string",
      "measurement": "string",
      "careInstruction": "string",
      "careSteps": "string",
      "stylingTip": "string",
      "warning": "string",
      "subText": "string",
      "brandId": "uuid",
      "categoryId": "uuid",
      "tagIds": ["uuid"],
      "attachments": {
        "uploads": [
          {
            "id": "uuid",
            "url": "string (cloudinary URL)"
          }
        ]
      },
      "createdAt": "ISO-8601",
      "updatedAt": "ISO-8601"
    }
  ],
  "total": "number",
  "page": "number",
  "limit": "number"
}
```

### POST /products

**Create new product**

- Auth: Required (JWT)

```json
Request:
{
  "name": "string",
  "subText": "string",
  "description": "string",
  "originalValue": "number",
  "dailyPrice": "number",
  "quantity": "number",
  "condition": "string",
  "size": "string",
  "color": "string",
  "composition": "string",
  "measurement": "string",
  "careInstruction": "string",
  "careSteps": "string",
  "stylingTip": "string",
  "warning": "string",
  "brandId": "uuid",
  "categoryId": "uuid",
  "tagIds": ["uuid"],
  "attachmentIds": ["uuid"]
}

Response (201):
[Full product object - see GET response]
```

### GET /products/:id

**Fetch single product**

- Auth: Optional
- Response (200): Full product object

### PUT /products/:id

**Update product**

- Auth: Required (JWT) - User must be owner

```json
Request: [Same as POST, but all fields optional]
Response (200): Updated product object
```

### DELETE /products/:id

**Delete product**

- Auth: Required (JWT) - User must be owner
- Response (204): No content

---

## 6. Profile Routes

### GET /users/profile

**Get current user profile with full details**

- Auth: Required (JWT)
- Response (200):

```json
{
  "id": "uuid",
  "email": "string",
  "name": "string",
  "role": "DRESSER|LISTER|ADMIN",
  "avatar": "string (URL)",
  "address": {
    "street": "string",
    "city": "string",
    "state": "string",
    "zipCode": "string",
    "country": "string"
  },
  "businessInfo": {
    "businessName": "string",
    "businessRegistration": "string",
    "taxId": "string"
  },
  "bankAccounts": [
    {
      "id": "uuid",
      "accountHolder": "string",
      "accountNumber": "string",
      "routingNumber": "string"
    }
  ],
  "emergencyContacts": [
    {
      "id": "uuid",
      "name": "string",
      "phone": "string",
      "relationship": "string"
    }
  ],
  "createdAt": "ISO-8601",
  "updatedAt": "ISO-8601"
}
```

### PUT /users/profile

**Update user profile**

- Auth: Required (JWT)

```json
Request: [Same schema as GET, all fields optional]
Response (200): Updated profile object
```

### POST /users/profile/avatar

**Upload profile avatar**

- Auth: Required (JWT)
- Content-Type: multipart/form-data
- Body: `file` (image file)
- Response (200):

```json
{
  "url": "string (cloudinary URL)",
  "updatedAt": "ISO-8601"
}
```

---

## 7. Upload Routes

### POST /uploads

**Upload file to Cloudinary**

- Auth: Required (JWT)
- Content-Type: multipart/form-data
- Body: `file` (image or video)
- Response (200):

```json
{
  "id": "uuid",
  "url": "string (cloudinary URL)",
  "type": "image|video",
  "size": "number (bytes)",
  "createdAt": "ISO-8601"
}
```

---

## Frontend Integration Files

### Where Routes are Used:

| Route                | Frontend File                               |
| -------------------- | ------------------------------------------- |
| `/brands`            | `src/lib/api/brands.ts`                     |
| `/brands` (POST)     | `src/lib/queries/brand/useBrands.ts`        |
| `/categories`        | `src/lib/api/category.ts`                   |
| `/categories` (POST) | `src/lib/queries/category/useCategories.ts` |
| `/tags`              | `src/lib/api/tags.ts`                       |
| `/tags` (POST)       | `src/lib/queries/tag/useTags.ts`            |
| `/products`          | `src/lib/api/product.ts`                    |
| `/auth/*`            | `src/lib/api/auth.ts`                       |
| `/users/profile`     | `src/lib/api/profile.ts`                    |

### Store Definitions:

| Store         | File                                | Purpose                     |
| ------------- | ----------------------------------- | --------------------------- |
| Product Draft | `src/store/useProductDraftStore.ts` | Holds product form state    |
| User          | `src/store/useUserStore.ts`         | Holds auth user data        |
| Profile       | `src/store/useProfileStore.ts`      | Holds detailed profile info |

---

## Error Handling Standards

All errors should return JSON with this format:

```json
{
  "error": "string (error message)",
  "code": "string (error code)",
  "details": "object (optional, additional info)",
  "timestamp": "ISO-8601"
}
```

**Common Status Codes:**

- `400` - Bad request (validation failed)
- `401` - Unauthorized (missing/invalid token)
- `403` - Forbidden (no permission)
- `404` - Not found
- `500` - Server error

---

## Authentication Header

All protected routes require:

```
Authorization: Bearer {jwt_token}
```

Token should be included in request header automatically by `apiFetch()` from `src/lib/api/http.ts`
