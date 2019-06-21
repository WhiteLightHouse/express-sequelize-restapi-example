import FeedService from "./FeedService";

const feedService = new FeedService();

test('Create service instance', () => {
    expect(feedService).toBeDefined();
});
