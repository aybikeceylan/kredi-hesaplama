let vade;
let tutar;
let krediTipi;



document.querySelector(".btn").addEventListener("click", () => {

    document.querySelector("section").classList.replace("d-none", "d-block")

    const vade = document.querySelector("#Input1").value
    const tutar = document.querySelector("#Input2").value
    const krediTipi = document.querySelector("#select").value
    console.log(vade);
    console.log(tutar);
    console.log(krediTipi);

    if ((vade === "") && (tutar === "") && (krediTipi === "Seçiniz")) {
        alert("seçim yapınız")
    } else {
        document.querySelector(".miktar").innerHTML = `${tutar}₺`
        document.querySelector(".vade").innerHTML = vade
        document.querySelector(".tip").innerHTML = krediTipi


        if (krediTipi === "Konut Kredisi") {
            faizOranı = 1.29
        }
        else if (krediTipi === 'Ihtiyac Kredisi') {
            faizOranı = 1.99;
        }
        else if (krediTipi === 'Arac Kredisi') {
            faizOranı = 1.79;
        }

        document.querySelector(".oran").innerHTML = faizOranı

        const taksit = (tutar * ((faizOranı / 100) * (1 + faizOranı / 100) ** vade)) / ((1 + faizOranı / 100) ** vade - 1)
        document.querySelector(".taksit").innerHTML = taksit

        const toplamTutar = taksit * vade
        document.querySelector(".toplam").innerHTML = toplamTutar
    }



})