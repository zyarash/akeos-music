/*
 *  filename: models/releases.js
 *  description: -
 **/

/** System imports **/
//-

/** External imports **/
//-

/** Project imports **/
const StrapiService = require('../services/strapi.js')

class Release {
    constructor({ release_name, release_fan_link, release_artwork }) {
        this.name = release_name;
        this.link = release_fan_link;
        this.artwork = release_artwork.data.attributes.url;
    }
}

class Releases {
    static async getAll() {
        try {
            const response = await StrapiService.fetch('akeos-releases?populate[0]=releases&populate[1]=releases.release_artwork');
            const data = response.data.data.attributes;
            return await data.releases.map(release => new Release(release))
        } catch (error) {
            console.log(error);
            return {};
        }
    }
}

module.exports = Releases;
