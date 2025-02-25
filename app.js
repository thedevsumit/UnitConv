let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
let dd1 = document.querySelector("#from")
let dd2 = document.querySelector("#to")
let button = document.querySelector("#button")
let cm = 1000
let ml = 1000
let gm = 1000
function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}
button.addEventListener(("click"), () => {
    let val1 = input1.value
    let fromval = dd1.value
    let toval = dd2.value
    console.log(val1, fromval, toval)
    if (isNumeric(val1)) {
        if (fromval === "metre" && toval === "centimetre") {
            let finalAns = val1 * cm;
            input2.value = `${val1} ${fromval} has ${finalAns} ${toval}`
        } else if (fromval === "metre" && toval === "MilliLitre") {
            let finalAns = val1 * ml
            input2.value = `${val1} ${fromval} has ${finalAns} ${toval}`
        }
        else if (fromval === "metre" && toval === "Grams") {
            alert("This conversion is not possible")
        } else if (fromval === "inches" && toval === "centimetre") {
            let finalAns = val1 * 2.54
            input2.value = `${val1} ${fromval} has ${finalAns} ${toval}`
        } else if (fromval === "inches" && toval === "MilliLitre") {
            let finalAns = val1 * 16.38
            input2.value = `${val1} ${fromval} has ${finalAns} ${toval}`
        } else if (fromval === "inches" && toval === "Grams") {
            alert("This conversion is not possible")
        } else if (fromval === "Litre" && toval === "centimetre") {
            let finalAns = val1 * cm
            input2.value = `${val1} ${fromval} has ${finalAns} ${toval}`
        } else if (fromval === "Litre" && toval === "MilliLitre") {
            let finalAns = val1 * ml
            input2.value = `${val1} ${fromval} has ${finalAns} ${toval}`
        } else if (fromval === "Litre" && toval === "Grams") {
            alert("This conversion is not possible")
        }
        else if (fromval === "Kg" && toval === "centimetre") {
            alert("This conversion is not possible")
        }
        else if (fromval === "Kg" && toval === "MilliLitre") {
            alert("This conversion is not possible")
        }
        else if (fromval === "Kg" && toval === "Grams") {
            let finalAns = val1 * 1000
            input2.value = `${val1} ${fromval} has ${finalAns} ${toval}`
        }
    }
    else {
        alert("Input must be a number")
    }

})