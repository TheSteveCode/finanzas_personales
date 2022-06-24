"use-strict"; //Use strict is a literal expression

// Topics in this code are:

/*
> JS Strict Mode
> JS Functions
> JS Arrow Functions
> JS Variables
> JS Statements
> JS Let, Const
> JS String Templates
> JS If
> More...

*/

// Initializing needed variables( Global scope ).
let txt, income, fixedIn, variableIn;

// When you click a button display this.
function fixedIncome() {
    //Local scope
    txt = document.getElementById('txt');
    income = document.getElementById('fixed_income').value;
    txt.innerHTML = `$${income} Pesos de sueldo.`; // JS String Templates
    txt.style.color="green";
    txt.style.fontSize="20px";
    }

// When you click a button display this.
const variableIncome = () => { // This is a JS Arrow Function
    //Local scope
    txt = document.getElementById('txt_variable');
    income = document.getElementById('variable_income').value;
    txt.innerHTML = `$${income} Pesos de ingresos variables.`; // JS String Templates
    txt.style.color="green";
    txt.style.fontSize="20px";
    }

// When you click a button display this, this is the addition of
function totalIncome() {
    //Local scope
    txt = document.getElementById('total_income');
    fixedIn = document.getElementById('fixed_income').value;
    variableIn = document.getElementById('variable_income').value;
    if (fixedIn == "" || variableIn == "") {
        alert("Debe llenar los campos de ingresos");
    }
    txt.innerHTML = "Usted tiene $"+(parseInt(fixedIn) + parseInt(variableIn))+ " pesos para este periódo";
    txt.style.color="green";
    txt.style.fontSize="20px";
    }


/* This is a simple code but contain some JS topics that can become very needness */
