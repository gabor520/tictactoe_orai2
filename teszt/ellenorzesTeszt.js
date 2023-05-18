import Jatekter from "../Jatekter";


QUnit.module("játéktér ellenőrzés metódusainak tesztelése", function (hooks){
    let jatekter;
    hooks.before(() => {
             jatekter = new Jatekter();
});

Qunit.test("ellenorzes letezik-e",function(assert){
    assert.ok(jatekter.ellenorzes, "létezik az ellenorzes metodus")
});


Qunit.test("getVizszintes",function(assert){
    assert.ok(jatekter.ellenorzes, "létezik az ellenorzes metodus")
});



Qunit.test("getFuggoleges",function(assert){
    assert.ok(jatekter.ellenorzes, "létezik az ellenorzes metodus")
});


Qunit.test("getAtlo",function(assert){
    assert.ok(jatekter.ellenorzes, "létezik az ellenorzes metodus")
});
QUnit.test("X gyozelem?",function (assert){
    jatekter.lista = ["X ", "X ", " X", " ", " ", " ", "O ", "O", ""];
    assert.equal(jatekter.getVizszintes(), "XXX@ @OO  @");
});



QUnit.test("X gyozelem?",function (assert){
    jatekter.lista = [" ", " ", " ", " X", " X", "X ", "O ", "O ", ""];
    assert.equal(jatekter.getVizszintes(), "@XXX @OO  @");
});


QUnit.test("X gyozelem?",function (assert){
    jatekter.lista = [" ", " ", " ", " ", " O", "O ", "X ", "X ", "X"];
    assert.equal(jatekter.getVizszintes(), "@ OO@XXX  @");
});



QUnit.test("O gyozelem?",function (assert){
    jatekter.lista = ["O ", "O ", " O", " ", " ", " ", "O ", "O", ""];
    assert.equal(jatekter.getVizszintes(), "OOO@ @XX  @");
});


QUnit.test("O gyozelem?",function (assert){
    jatekter.lista = [" ", " ", " ", " O", "O", "O ", "X ", "X ", ""];
    assert.equal(jatekter.getVizszintes(), "@OOO @XX  @");
});


QUnit.test("O gyozelem?",function (assert){
    jatekter.lista = [" ", " ", " ", " ", " X", "X ", "O ", "O ", "O"];
    assert.equal(jatekter.getVizszintes(), "@ XX@OOO  @");
});



QUnit.test("X gyozelem?",function (assert){
    jatekter.lista = ["X ", "X ", " X", " ", " ", " ", "O ", "O", ""];
    assert.equal(jatekter.getFuggoleges(), "XXX@ @OO  @");
});



QUnit.test("X gyozelem?",function (assert){
    jatekter.lista = [" ", " ", " ", " X", " X", "X ", "O ", "O ", ""];
    assert.equal(jatekter.getFuggoleges(), "@XXX @OO  @");
});


QUnit.test("X gyozelem?",function (assert){
    jatekter.lista = [" ", " ", " ", " ", " O", "O ", "X ", "X ", "X"];
    assert.equal(jatekter.getFuggoleges(), "@ OO@XXX  @");
});




QUnit.test("O gyozelem?",function (assert){
    jatekter.lista = ["O ", "O ", " O", " ", " ", " ", "O ", "O", ""];
    assert.equal(jatekter.getFuggoleges(), "OOO@ @XX  @");
});


QUnit.test("O gyozelem?",function (assert){
    jatekter.lista = [" ", " ", " ", " O", "O", "O ", "X ", "X ", ""];
    assert.equal(jatekter.getFuggoleges(), "@OOO @XX  @");
});


QUnit.test("O gyozelem?",function (assert){
    jatekter.lista = [" ", " ", " ", " ", " X", "X ", "O ", "O ", "O"];
    assert.equal(jatekter.getFuggoleges(), "@ XX@OOO  @");
});







QUnit.test("X nincs nyeres?",function (assert){
    jatekter.lista = ["X ", "O ", " X", " O", " X", "X ", "O", "O ", "X"];
    assert.equal(jatekter.getVizszintes(), "XOX@ OXX@OOX  @");
});


QUnit.test("X nincs nyeres?",function (assert){
    jatekter.lista = ["X ", "O ", " X", " O", " X", "X ", "O", "O ", "X"];
    assert.equal(jatekter.getVizszintes(), "XOX@ OXX@OOX  @");
});






});