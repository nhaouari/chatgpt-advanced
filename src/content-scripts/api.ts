export interface SearchResult {
    body: string
    href: string
    title: string
}

export async function apiSearch(query: string, numResults: number, timePeriod: string, region: string): Promise<SearchResult[]> {
    const url = `http://api.duckduckgo.com/?q=${query}&format=json`

    const response = await fetch(url)
    const results = await response.json()
    return results.RelatedTopics.map((result: any) => {
        return {
            body: result.Text,
            href: result.FirstURL,
            title: result.Text
        }
    })
}
