import InnerCommentService from "./InnerCommentService";

const innerCommentService = new InnerCommentService();

test('Create service instance', () => {
    expect(innerCommentService).toBeDefined();
});
