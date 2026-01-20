# Category Management Guide

This guide explains how to manage categories in Ray's Garden.

## Current Categories

Your garden currently has these categories:

| Category   | Folder Name  | Description                          |
|------------|--------------|--------------------------------------|
| Projects   | `projects`   | Project building and development logs |
| Essays     | `essays`     | Personal thoughts and reflections     |
| Resources  | `resources`  | Guides, tutorials, and helpful resources |
| Ki         | `ki`         | Updates about Ki projects             |

## File Structure

```
content/
├── projects/
│   └── your-post.mdx
├── essays/
│   └── another-post.mdx
├── resources/
├── ki/
```

## Adding a New Post

1. Choose the appropriate category folder in `content/`
2. Create a new `.mdx` or `.md` file with a URL-friendly slug name
3. Add frontmatter at the top of the file:

```mdx
---
title: Your Post Title
created: 2026-01-20
updated: 2026-01-21
category: Projects
---

Your content here...
```

**Important**:
- The `category` field in frontmatter must exactly match one of the defined categories (case-sensitive).
- The `created` field is required and represents when the post was first created.
- The `updated` field is optional and represents the last update date.

## Adding a New Category

To add a new category, you need to update 3 files:

### 1. Update Type Definition (`src/types/post.ts`)

Add your new category to the `Category` type:

```typescript
export type Category =
  | "Projects"
  | "Essays"
  | "Resources"
  | "Ki"
  | "Your New Category";  // ← Add this
```

### 2. Update MDX Library (`src/lib/mdx.ts`)

Add the folder slug to the `categoryFolders` array:

```typescript
const categoryFolders = [
  "projects",
  "essays",
  "resources",
  "ki",
  "your-new-category",  // ← Add this (lowercase, hyphens for spaces)
];
```

### 3. Create the Category Folder

```bash
mkdir content/your-new-category
```

### Example: Adding "Book Notes" Category

1. Edit `src/types/post.ts`:
   ```typescript
   export type Category =
     | "Projects"
     | "Essays"
     | "Resources"
     | "Ki"
     | "Book Notes"  // ← Add here
   ```

2. Edit `src/lib/mdx.ts`:
   ```typescript
   const categoryFolders = [
     "projects",
     "essays",
     "resources",
     "ki",
     "book-notes",  // ← Add here
   ];
   ```

3. Create folder:
   ```bash
   mkdir content/book-notes
   ```

4. Add a post:
   ```mdx
   ---
   title: Atomic Habits Notes
   created: 2026-01-20
   category: Book Notes
   ---

   Content here...
   ```

## Renaming a Category

To rename an existing category:

### 1. Update the Display Name

Edit `src/types/post.ts` to change the category name:

```typescript
export type Category =
  | "Projects"
  | "New Name"  // ← Changed from old name
  // ...
```

### 2. Update or Keep the Folder Slug

If you want to change the URL slug, also update `src/lib/mdx.ts`:

```typescript
const categoryFolders = [
  "new-slug",  // ← Changed from old slug
  // ...
];
```

And rename the folder:
```bash
mv content/old-slug content/new-slug
```

### 3. Update Existing Posts

Update the `category` field in all posts in that category to use the new name:

```mdx
---
category: New Name  # ← Update this
---
```

## Removing a Category

1. Delete the category from `src/types/post.ts`
2. Remove the folder from `categoryFolders` in `src/lib/mdx.ts`
3. Delete the folder from `content/` or move posts to other categories
4. Update or delete posts that used that category

## How Categories Work

- **Display Name**: What users see (e.g., "Projects")
- **Folder Name**: Where files are stored (e.g., `projects`)
- **URL Slug**: Generated from folder name (e.g., `/projects`)
- **Frontmatter**: Must match the display name exactly

The system automatically:
- Converts category names to URL slugs (lowercase, hyphens for spaces)
- Discovers categories from post frontmatter
- Groups posts by category
- Generates category pages

## Best Practices

1. **Consistent Naming**: Keep category names clear and distinct
2. **Logical Organization**: Group similar content together
3. **URL-Friendly Slugs**: Use lowercase and hyphens for folder names
4. **Frontmatter Accuracy**: Always match the exact category name in posts
5. **Start Small**: Don't create too many categories initially

## Troubleshooting

**Post not showing up?**
- Check that the post is in the correct category folder
- Verify the `category` in frontmatter matches exactly (case-sensitive)
- Ensure the folder is listed in `categoryFolders` array

**Category page not found?**
- Make sure the category exists in `src/types/post.ts`
- Verify at least one post uses that category
- Check that folder name matches the category slug

**Build errors?**
- Ensure all posts have valid frontmatter with required fields
- Check that category names in posts match the type definition
- Verify folder names are added to `categoryFolders` array
