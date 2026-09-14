import {project} from './documents/project'
import {siteSettings} from './documents/siteSettings'
import {blockContent} from './objects/blockContent'
import {linkItem} from './objects/linkItem'
import {mediaItem} from './objects/mediaItem'
import {socialLink} from './objects/socialLink'

export const schemaTypes = [
  // documents
  project,
  siteSettings,
  // objects
  blockContent,
  linkItem,
  mediaItem,
  socialLink,
]
