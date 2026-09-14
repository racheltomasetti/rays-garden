import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons/DocumentText'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      description:
        'Drives filtering on /work and which project(s) power /ki. Multiple projects can share the same category — e.g. more than one project can be tagged "ki".',
      type: 'string',
      options: {
        list: [
          {title: 'Client', value: 'client'},
          {title: 'Personal', value: 'personal'},
          {title: 'Ki', value: 'ki'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client name',
      description: 'Only relevant when category is Client.',
      type: 'string',
      hidden: ({document}) => document?.category !== 'client',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      description: 'Short description shown on the /work card.',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(280).warning('Keep it short — this is card copy, not the full story.'),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      description:
        'The deep narrative. Most projects can leave this thin or empty; this is where a project like Ki carries its full exploration.',
      type: 'blockContent',
    }),
    defineField({
      name: 'coverMedia',
      title: 'Cover media',
      type: 'mediaItem',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [defineArrayMember({type: 'mediaItem'})],
    }),
    defineField({
      name: 'techStack',
      title: 'Tech stack',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [defineArrayMember({type: 'linkItem'})],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Completed', value: 'completed'},
          {title: 'Exploring', value: 'exploring'},
        ],
        layout: 'radio',
      },
      initialValue: 'active',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured on home',
      description: 'Show this in the "Now" section on the homepage.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Order',
      description: 'Lower numbers appear first in the /work grid.',
      type: 'number',
    }),
    defineField({
      name: 'hidden',
      title: 'Hidden',
      description: 'Hide this project from the public site without deleting it.',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      status: 'status',
      hidden: 'hidden',
      media: 'coverMedia.image',
    },
    prepare({title, category, status, hidden, media}) {
      const subtitle = [category, status, hidden ? 'Hidden' : null].filter(Boolean).join(' · ')
      return {title, subtitle, media}
    },
  },
})
