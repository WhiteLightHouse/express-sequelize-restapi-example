import NewsService from "./NewsService";

const newsService = new NewsService();

test('Create service instance', () => {
    expect(newsService).toBeDefined();
});
