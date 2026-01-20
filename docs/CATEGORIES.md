# Category Management Guide

This guide explains how to manage categories in Ray's Garden.

## Current Categories

Your garden currently has these categories:

| Category      | Folder Name    | Description                          |
|---------------|----------------|--------------------------------------|
| Build Log     | `build-log`    | Project building and development logs |
| Reflections   | `reflections`  | Personal thoughts and reflections     |
| Stream Notes  | `stream-notes` | Notes from live streams               |
| Guides        | `guides`       | How-to guides and tutorials           |
| Ki Updates    | `ki-updates`   | Updates about Ki projects             |
| Field Notes   | `field-notes`  | Observations and field research       |

## File Structure

```
content/
├── build-log/
│   └── your-post.mdx
├── reflections/
│   └── another-post.mdx
├── stream-notes/
├── guides/
├── ki-updates/
└── field-notes/
```

## Adding a New Post

1. Choose the appropriate category folder in `content/`
2. Create a new `.mdx` or `.md` file with a URL-friendly slug name
3. Add frontmatter at the top of the file:

```mdx
---
title: Your Post Title
date: 2026-01-20
category: Build Log
excerpt: A brief description of your post
---

Your content here...
```

**Important**: The `category` field in frontmatter must exactly match one of the defined categories (case-sensitive).

## Adding a New Category

To add a new category, you need to update 3 files:

### 1. Update Type Definition (`src/types/post.ts`)

Add your new category to the `Category` type:

```typescript
export type Category =
  | "Build Log"
  | "Reflections"
  | "Stream Notes"
  | "Guides"
  | "Ki Updates"
  | "Field Notes"
  | "Your New Category";  // ← Add this
```

### 2. Update MDX Library (`src/lib/mdx.ts`)

Add the folder slug to the `categoryFolders` array:

```typescript
const categoryFolders = [
  "build-log",
  "reflections",
  "stream-notes",
  "guides",
  "ki-updates",
  "field-notes",
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
     | "Build Log"
     | "Book Notes"  // ← Add here
     // ... other categories
   ```

2. Edit `src/lib/mdx.ts`:
   ```typescript
   const categoryFolders = [
     "build-log",
     "book-notes",  // ← Add here
     // ... other folders
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
   date: 2026-01-20
   category: Book Notes
   excerpt: Key insights from Atomic Habits
   ---

   Content here...
   ```

## Renaming a Category

To rename an existing category:

### 1. Update the Display Name

Edit `src/types/post.ts` to change the category name:

```typescript
export type Category =
  | "Build Log"
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

- **Display Name**: What users see (e.g., "Build Log")
- **Folder Name**: Where files are stored (e.g., `build-log`)
- **URL Slug**: Generated from folder name (e.g., `/build-log`)
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
