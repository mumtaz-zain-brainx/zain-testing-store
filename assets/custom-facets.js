const details_groups = document.querySelectorAll(".filter-group");
const active_pills = document.querySelectorAll(".active-filters__remove-filter");
const active_filters = document.querySelector(".active-filters");

const filter_checkbox_input = document.querySelectorAll(".filter-checkbox-input");
const filter_price_input = document.querySelectorAll(".filter-price-input");
const filter_submit_btn = document.querySelector(".filter-submit-btn");


const filter_checkbox_input_tag = document.querySelectorAll(".filter-checkbox-input-tag");
const active_filters__remove_filter_custom = document.querySelectorAll(".active-filters__remove-filter-custom");

for (let i = 0; i < filter_checkbox_input_tag.length; i++) {
    filter_checkbox_input_tag[i].addEventListener("click",()=>{
        filter_checkbox_input_tag[i].children[1].click();
    })
}

for (let i = 0; i < active_filters__remove_filter_custom.length; i++) {
    active_filters__remove_filter_custom[i].addEventListener("click",()=>{
        active_filters__remove_filter_custom[i].children[0].click();
    })
}

for(let i=0; i<details_groups.length; i++){
    // details_groups[i].open = true;
}

if(active_pills.length < 1){
  active_filters.style.display = "none";
}
else{
  active_filters.style.display = "flex";
}

for (let i = 0; i < filter_checkbox_input.length; i++) {
    filter_checkbox_input[i].addEventListener('click',()=>{
        filter_submit_btn.click();
    })   
}

for (let i = 0; i < filter_price_input.length; i++) {
    filter_price_input[i].addEventListener("change",()=>{
        filter_submit_btn.click();
    })
}

// Slider JS


let range_min_value = document.getElementById("range-min-value");
let range_max_value = document.getElementById("range-max-value");
const range_input_slider = document.querySelectorAll(".range-input-slider");

function validateRange(minPrice, maxPrice) {
  range_min_value.innerHTML = "$" + minPrice;
  range_max_value.innerHTML = "$" + maxPrice;
}

for (let i = 0; i < range_input_slider.length; i++) {
    range_input_slider[i].addEventListener("input", () => {
        let minPrice = parseInt(range_input_slider[0].value);
        let maxPrice = parseInt(range_input_slider[1].value);
    
        validateRange(minPrice, maxPrice);
    });
    range_input_slider[i].addEventListener("change",()=>{
        filter_submit_btn.click();
    })
}

validateRange(range_input_slider[0].value, range_input_slider[1].value);