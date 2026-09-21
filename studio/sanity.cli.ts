import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'trxlasoy',
    dataset: 'production',
  },
  studioHost: 'racheltomasetti',
  deployment: {
    appId: 'ki9ulb0v19ogish0x1h59fkw',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
