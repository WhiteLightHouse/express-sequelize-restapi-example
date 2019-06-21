import CommentService from "./CommentService";
const commentService = new CommentService();

test('Create service instance', () => {
    expect(commentService).toBeDefined();
});

test('Check Vo', () => {
    console.log(commentService.vo);
    expect(commentService.vo).toBeDefined();
});

test('Check Model', () => {
    expect(commentService.model).toBeDefined();
});
