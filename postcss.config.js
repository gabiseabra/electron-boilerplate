const path = require("path")
const flatten = require("flat")
const theme = require("./assets/theme")
const config = require("./webpack/config").default
const {
	ResolverFactory,
	NodeJsInputFileSystem,
	CachedInputFileSystem
} = require("enhanced-resolve")

const CACHE_TTL = 6000

const fileSystem = new CachedInputFileSystem(new NodeJsInputFileSystem(), CACHE_TTL)

const resolver = ResolverFactory.createResolver(Object.assign({}, config.resolve || {}, {
	fileSystem,
	useSyncFileSystemCalls: true,
	extensions: [ ".css" ]
}))

module.exports = {
	plugins: {
		"postcss-import": {
			path: [ path.join(__dirname, "assets") ],
			resolve(id, context) {
				return resolver.resolveSync({}, context, id)
			}
		},
		"postcss-url": {},
		"postcss-cssnext": {
			features: {
				customProperties: {
					variables: flatten(theme, { delimiter: "-" })
				}
			}
		}
	}
}
