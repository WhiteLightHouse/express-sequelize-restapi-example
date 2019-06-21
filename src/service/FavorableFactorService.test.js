import FavorableFactorService from './FavorableFactorService'
import _FavorableFactor from "../vo/_FavorableFactor";
const favorableFactorService = new FavorableFactorService();

test('Create service instance', () => {
    expect(favorableFactorService).toBeDefined();
});

test('check Vo Test', () =>{
    expect(favorableFactorService.checkVo(new _FavorableFactor({
        "id": 94,
        "createdAt": "2019-06-20T11:27:52.970Z",
        "title": "타이틀 테스트",
        "content": "콘텐츠 테스트",
        "date": "2017-08-28T08:22:21.000Z",
        "publication": "퍼블리케이션 테스트",
        "type": "타입 테스트",
        "image": "이미지 테스트",
        "link": "링크 테스트",
        "updatedAt": "2019-06-20T11:27:52.970Z",
        "company": {
            "id": 46,
            "name": "컴퍼니 네임",
            "icon": "컴퍼니 아이콘",
            "currency": "컴퍼니 커렌시",
            "favorableFactorId": 94,
            "createdAt": "2019-06-20T11:27:53.023Z",
            "updatedAt": "2019-06-20T11:27:53.023Z"
        }
    }))).toBe(true);
});
