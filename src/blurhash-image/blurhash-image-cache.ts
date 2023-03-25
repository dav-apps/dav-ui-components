export class BlurhashImageCache {
	private static blurhashImageCache: {
		[key: string]: string
	} = {}

	static GetBlurhashImageCacheKey(
		blurhash: string,
		width: number,
		height: number
	): string {
		return `${blurhash}:${width},${height}`
	}

	static GetBlurhashImageCacheItem(key: string): string {
		return this.blurhashImageCache[key]
	}

	static SetBlurhashImageCacheItem(key: string, data: string) {
		this.blurhashImageCache[key] = data
	}
}
