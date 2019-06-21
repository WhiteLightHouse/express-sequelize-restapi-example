export default class _BasicVo {
    id;
    createdAt;
    deletedAt;

    constructor({id, createdAt, deletedAt}) {
        this.id = id;
        this.createdAt = createdAt;
        this.deletedAt = deletedAt;
    }
}
