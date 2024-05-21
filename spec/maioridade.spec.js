describe("Teste de validação - maior Idade", function(){
    it("validação maior idade", function(){expect(maioridade(20)).toBe('maior idade'); })
});
describe("Teste de validação - menor idade", function(){
    it("validação maior idade", function(){expect(maioridade(10)).toBe('menor idade'); })
});