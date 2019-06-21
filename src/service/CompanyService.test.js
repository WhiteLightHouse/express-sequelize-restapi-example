import CompanyService from "./CompanyService";
const companyService = new CompanyService();

test('Create service instance', () => {
    expect(companyService).toBeDefined();
});
