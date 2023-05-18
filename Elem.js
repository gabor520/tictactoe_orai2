/**megjelenít egyetlen elemet */
class Elem {
  #index;
  constructor( index,szuloElem) {
    this.#index = index;
    szuloElem.append("<div class='elem'><p></p></div>");
    //megfogom a html elemeket
    this.divElem = $("article div:last-child");

    // this.pElem = this.divElem.children("p");
    this.pElem = $("article div:last-child p");

    this.divElem.on("click", () => {
      //this.setElem("X");
    
      //létrehozunk egy saját eseményt : elemKattintas
      this.kattintasTrigger()
    });
  }
  getIndex() {
    return this.#index;
  }
  setElem(adat) {
    this.pElem.html(adat);
  }
  setSzín(szín){
    this.divElem.css("background",szín)
  }
  kattintasTrigger() {
//létrehozza a saját eseményünket
    const esemeny=new CustomEvent("elemKattintas", {detail:this})
    window.dispatchEvent(esemeny)

  }
}

export default Elem;
